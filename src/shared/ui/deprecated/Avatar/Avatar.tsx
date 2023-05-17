import { CSSProperties, useMemo } from 'react';

import UserIcon from '@/shared/assets/icons/user-filled.svg';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import { AppImage } from '../../redesigned/AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import cls from './Avatar.module.scss';

interface AvatarProps {
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * The URL of the image to be displayed as the avatar.
     */
    src?: string;
    /**
     * The alternative text for the avatar image.
     */
    alt?: string;
    /**
     * The size of the avatar in pixels.
     */
    size?: number;
    /**
     * A boolean that, when true, applies an inverted color scheme to the fallback avatar icon.
     */
    fallbackInverted?: boolean;
}
/**
 * Deprecated, please, use new components from folder redesigned
 * @deprecated
 */
export const Avatar = ({
    className,
    src,
    alt,
    size = 100,
    fallbackInverted,
}: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = (
        <Icon
            Svg={UserIcon}
            width={size}
            height={size}
            inverted={fallbackInverted}
        />
    );

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
