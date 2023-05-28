import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './HeaderDescription.module.scss';

export type Variant = 'normal' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l';

interface HeaderDescriptionProps {
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * The title text to be displayed.
     */
    header?: string | null | undefined;
    /**
     * The main text content to be displayed.
     */
    description?: string | null | undefined;
    /**
     * The theme of the header.
     */
    variant?: Variant;
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
    bold?: boolean;
    fullWidth?: boolean;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToClass: Record<TextSize, string> = {
    s: cls.size_s,
    m: cls.size_m,
    l: cls.size_l,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

export const HeaderDescription = memo((props: HeaderDescriptionProps) => {
    const {
        className,
        header,
        description,
        variant = 'normal',
        align = 'left',
        size = 'm',
        bold,
        fullWidth,
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    const additionalClasses = [className, cls[variant], cls[align], sizeClass];

    return (
        <div
            className={classNames(
                cls.Text,
                { [cls.bold]: bold, [cls.fullWidth]: fullWidth },
                additionalClasses,
            )}
        >
            {header && (
                <HeaderTag
                    className={cls.header}
                    data-testid={`${dataTestId}.Header`}
                >
                    {header}
                </HeaderTag>
            )}
            {description && (
                <p
                    className={cls.description}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {description}
                </p>
            )}
        </div>
    );
});
