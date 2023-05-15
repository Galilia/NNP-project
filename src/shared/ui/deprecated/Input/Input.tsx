import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    /**
     * The current value of the input field. Can be either a string or a number.
     */
    value?: string | number;
    /**
     * Function to handle the change of input field value.
     */
    onChange?: (value: string) => void;
    /**
     * A flag that, when true, automatically focuses the input field when it is rendered.
     */
    autofocus?: boolean;

    label: string;
    /**
     * A flag that, when true, makes the input field read-only.
     */
    readonly?: boolean;
    /**
     * A flag that, when true, allows only numeric input.
     */
    onlyNumbers?: boolean;
    /**
     * The placeholder text displayed in the input field before the user enters a value.
     */
    placeholder: string;
}
/**
 * Deprecated, please, use new components from folder redesigned
 * @deprecated
 */
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        label,
        readonly,
        onlyNumbers,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onlyNumbers) {
            if (/^\d*$/.test(e.target.value)) {
                onChange?.(e.target.value);
            }
        } else {
            onChange?.(e.target.value);
        }
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {label && (
                <label htmlFor="input-label" className={cls.inputLabel}>
                    {label}
                </label>
            )}
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
});
