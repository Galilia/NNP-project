import { useEffect } from 'react';

/**
 * Custom hook that runs a callback function once after the initial render,
 * provided the environment is neither 'storybook' nor 'jest'.
 *
 * @param callback - The function to be executed after the initial render.
 */
export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
            callback();
        }

        // eslint-disable-next-line
    }, []);
}
