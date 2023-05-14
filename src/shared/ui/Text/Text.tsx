import { memo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import { ButtonTheme } from '../Button/Button';

import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * The title text to be displayed.
     */
    title?: string | null | undefined;
    /**
     * The main text content to be displayed.
     */
    text?: string | null | undefined;
    /**
     * The theme of the text.
     */
    theme?: TextTheme;
    /**
     * The alignment of the text.
     */
    align?: TextAlign;
    /**
     * The size of the text.
     */
    size?: TextSize;
    /**
     * The value for the `data-testid` attribute used for testing.
     */
    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = ButtonTheme.OUTLINE,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames('', mods, [className])}>
            {title && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
                    {text}
                </p>
            )}
        </div>
    );
});
