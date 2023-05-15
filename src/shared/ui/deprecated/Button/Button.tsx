import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Button theme. Determines the visuals (within frame, no styles, color opposite to the app theme, etc.)
     */
    theme?: ButtonTheme;
    /**
     * A flag making the button square
     */
    square?: boolean;
    /**
     * Button size in accordance with the design system
     */
    size?: ButtonSize;
    /**
     * A flag controlling the button's functionality
     */
    disabled?: boolean;
    /**
     * Button content
     */
    children?: ReactNode;
    /**
     * Expands the button to fill all available width
     */
    fullWidth?: boolean;
}
/**
 * Deprecated, please, use new components from folder redesigned
 * @deprecated
 */
export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        disabled,
        size = ButtonSize.M,
        fullWidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls[size]]: true,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
