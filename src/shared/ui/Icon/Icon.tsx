import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    onClick?: () => void;
    inverted?: boolean;
}

export const Icon = memo(({
    className, Svg, onClick, inverted,
}: IconProps) => (
    <Svg
        onClick={onClick}
        className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}
    />
));
