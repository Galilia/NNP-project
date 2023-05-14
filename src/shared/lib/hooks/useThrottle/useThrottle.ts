import { useCallback, useEffect, useRef } from 'react';

/**
 * Reusable hook that throttles a callback function.
 *
 * @param callback - The function to be throttled.
 * @param delay - The throttling delay in milliseconds.
 *
 * @returns - A memoized version of the callback function that gets invoked at most once per every `delay` milliseconds.
 */
export function useThrottle(callback: (...args: any) => void, delay: number) {
    const throttleRef = useRef(false);
    const timeoutRef = useRef<any>(null);

    const throttledCallback = useCallback(
        (...args: any) => {
            if (!throttleRef.current) {
                callback(...args);
                throttleRef.current = true;

                timeoutRef.current = setTimeout(() => {
                    throttleRef.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );

    useEffect(
        () => () => {
            clearTimeout(timeoutRef.current);
        },
        [],
    );

    return throttledCallback;
}
