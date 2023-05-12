import { useCallback } from 'react';

export const useScrollToElement = (selector: string) => {
    return useCallback(() => {
        const element = document.querySelector(`#${selector}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selector]);
};
