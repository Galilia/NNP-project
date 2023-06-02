import { useCallback } from 'react';

/**
 * Reusable hook for smooth scrolling to an element on a page.
 * @param selector - the ID of the DOM element to scroll to.
 * @param callback
 * @returns - a callback function that scrolls the window to the specified element smoothly when invoked.
 */
export const useScrollToElement = (selector: string, callback?: () => void) => {
    return useCallback(() => {
        const element = document.querySelector(`#${selector}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            callback?.();
        }
    }, [callback, selector]);
};
