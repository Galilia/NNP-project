import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

/**
 * Custom hook that detects whether the current device is a mobile device based on the window's width.
 *
 * @returns - A boolean value indicating whether the current device is a mobile device.
 */
export const useDevice = (breakpoint: number = MOBILE_BREAKPOINT) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // const handleResize = () => setIsMobile(window.matchMedia('(pointer:coarse)').matches);
        const handleResize = () => setIsMobile(window.innerWidth < breakpoint);

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize); // удаляем обработчик
    }, [breakpoint]);

    return isMobile;
};
