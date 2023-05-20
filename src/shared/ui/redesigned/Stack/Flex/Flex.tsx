import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '24' | '32';
export type FlexWrap = 'wrap' | 'nowrap';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    24: cls.gap24,
    32: cls.gap32,
};

const wrapClasses: Record<FlexWrap, string> = {
    wrap: cls.wrap,
    nowrap: cls.nowrap,
};

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps {
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * The content of the flex container.
     */
    children: ReactNode;
    /**
     * The justify content property for aligning items along the main axis.
     */
    justify?: FlexJustify;
    /**
     * The align items property for aligning items along the cross axis.
     */
    align?: FlexAlign;
    /**
     * The flex-direction property for controlling the direction of flex items.
     */
    direction: FlexDirection;
    /**
     * The gap between flex items.
     */
    gap?: FlexGap;
    /**
     * Whether the flex container should have a max-width of 100%.
     */
    max?: boolean;
    /**
     * The wrap property for controlling whether flex items should wrap or not.
     */
    wrap?: FlexWrap;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction,
        gap,
        max,
        wrap,
        ...otherProps
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
        wrap && wrapClasses[wrap],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div className={classNames(cls.Flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    );
};
