import { RefObject, useEffect } from 'react';

export const useClickOutside = (callback: (...args: any[]) => void, ref: RefObject<HTMLElement>) => {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback([]);
            }
        };

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [callback, ref]);
};
