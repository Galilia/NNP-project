import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement>{
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    onClick?: () => void;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const {
        className, Svg, onClick, inverted, ...otherProps
    } = props;
    return (
        <Svg
            onClick={onClick}
            className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}
            {...otherProps}
        />
    );
});
