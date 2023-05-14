import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverResult = [boolean, UseHoverBind];

/**
 * Custom hook that detects whether an element is being hovered over by the user.
 *
 * @returns - A tuple where the first item is a boolean indicating whether the element is being hovered over,
 *            and the second item is an object containing handlers for onMouseEnter and onMouseLeave events.
 */
export const useHover = (): UseHoverResult => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo(
        () => [isHover, { onMouseEnter, onMouseLeave }],
        [isHover, onMouseEnter, onMouseLeave],
    );
};
