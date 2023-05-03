import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

export const useDevice = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // const handleResize = () => setIsMobile(window.matchMedia('(pointer:coarse)').matches);
        const handleResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize); // удаляем обработчик
    }, []);

    return isMobile;
};
