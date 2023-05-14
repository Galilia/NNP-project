import { HTMLAttributes, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * The content to be rendered inside the card.
     */
    children: ReactNode;
    /**
     * The theme of the card. It can be either 'normal' or 'outlined'.
     */
    theme?: CardTheme;
    /**
     * A boolean that, when true, expands the card to fill the available width.
     */
    fullWidth?: boolean;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        fullWidth,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, { [cls.fullWidth]: fullWidth }, [
                className,
                cls[theme],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
