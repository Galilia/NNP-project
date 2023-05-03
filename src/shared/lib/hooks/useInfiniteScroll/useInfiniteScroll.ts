import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
    callback,
    triggerRef,
    wrapperRef,
}: UseInfiniteScrollOptions) {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const currentTriggerRef = triggerRef.current;
        const currenWrapperRef = wrapperRef.current;

        if (callback) {
            const options = {
                root: currenWrapperRef,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(currentTriggerRef);
        }

        return () => {
            if (observer && currentTriggerRef) {
                observer.unobserve(currentTriggerRef);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
}
