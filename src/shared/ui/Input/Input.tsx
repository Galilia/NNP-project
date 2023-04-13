import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    label: string;
    readonly?: boolean;
    onlyNumbers?: boolean;
    placeholder: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange, type = 'text',
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
            {label && <label htmlFor="input-label" className={cls.inputLabel}>{label}</label>}
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
