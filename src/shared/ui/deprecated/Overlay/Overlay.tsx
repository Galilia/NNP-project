import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Overlay.module.scss';

interface OverlayProps {
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * Function to handle the click event on the overlay.
     */
    onClick?: () => void;
}
/**
 * Deprecated, please, use new components from folder redesigned
 * @deprecated
 */
export const Overlay = memo((props: OverlayProps) => {
    const { className, onClick } = props;

    return (
        <div
            onClick={onClick}
            className={classNames(cls.Overlay, {}, [className])}
        />
    );
});
