import { memo, ReactElement } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './MainLayoutMobile.module.scss';

interface MainLayoutMobileProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
}

export const MainLayoutMobile = memo((props: MainLayoutMobileProps) => {
    const { className, content, header } = props;

    return (
        <div className={classNames(cls.MainLayoutMobile, {}, [className])}>
            <div className={cls.content}>{content} </div>
            <div className={cls.header}>{header} </div>
        </div>
    );
});
