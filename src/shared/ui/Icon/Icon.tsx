import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * A React Functional Component that returns an SVG element.
     */
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    /**
     * Function to handle click events on the icon.
     */
    onClick?: () => void;
    /**
     * A boolean that, when true, applies an inverted color scheme to the icon.
     */
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, onClick, inverted, ...otherProps } = props;
    return (
        <Svg
            onClick={onClick}
            className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
                className,
            ])}
            {...otherProps}
        />
    );
});
