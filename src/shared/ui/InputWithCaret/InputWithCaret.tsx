import React, {
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './InputWithCaret.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputWithCaretProps extends HTMLInputProps {
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

export const InputWithCaret = memo((props: InputWithCaretProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        onlyNumbers,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const isCaretVisible = isFocused && !readonly;

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onlyNumbers) {
            if (/^\d*$/.test(e.target.value)) {
                onChange?.(e.target.value);
                setCaretPosition(e.target.value.length);
            }
        } else {
            onChange?.(e.target.value);
            setCaretPosition(e.target.value.length);
        }
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div
            className={classNames(cls.InputWithCaretWrapper, mods, [className])}
        >
            {placeholder && (
                <div className={cls.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
});
