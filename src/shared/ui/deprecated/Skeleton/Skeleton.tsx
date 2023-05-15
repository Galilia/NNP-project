import { CSSProperties, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * The height of the skeleton element.
     */
    height?: string | number;
    /**
     * The width of the skeleton element.
     */
    width?: string | number;
    /**
     * The border radius of the skeleton element.
     */
    border?: string;
}
/**
 * Deprecated, please, use new components from folder redesigned
 * @deprecated
 */
export const Skeleton = memo((props: SkeletonProps) => {
    const { className, height, width, border } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
});
