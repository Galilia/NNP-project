import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    onClick?: () => void;
}

export const Icon = memo(({ className, Svg, onClick }: IconProps) => (
    <Svg onClick={onClick} className={classNames(cls.Icon, {}, [className])} />
));
