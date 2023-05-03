import { MutableRefObject, ReactNode, UIEventHandler, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollByPath, scrollSaveActions } from '@/features/ScrollSave';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { TestProps } from '@/shared/types/tests';

import cls from './Page.module.scss';

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
        'data-testid': dataTestId,
    } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerEndOfPageRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getScrollByPath(state, pathname),
    );

    useInfiniteScroll({
        callback: onScrollEnd,
        triggerRef: triggerEndOfPageRef,
        wrapperRef,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll: UIEventHandler<HTMLElement> = useThrottle((e) => {
        const target = e.currentTarget;
        dispatch(
            scrollSaveActions.setScrollPosition({
                position: target.scrollTop,
                path: pathname,
            }),
        );
    }, 500);

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
            data-testid={dataTestId ?? 'page'}
        >
            {children}
            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerEndOfPageRef} />
            ) : null}
        </main>
    );
};
