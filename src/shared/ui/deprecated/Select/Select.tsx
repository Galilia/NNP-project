import { ChangeEvent, useCallback, useMemo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    /**
     * The value of the select option.
     */
    value: T;
    /**
     * The display content of the select option.
     */
    content: string;
}

interface SelectProps<T extends string> {
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * The label displayed above the select element.
     */
    label?: string | null | undefined;
    /**
     * An array of options available for selection.
     */
    options?: SelectOption<T>[];
    /**
     * The currently selected option.
     */
    value?: T;
    /**
     * Function to be called when the selected value changes.
     */
    onChange?: (value: T) => void;
    /**
     * Boolean flag indicating whether the select is readonly.
     */
    readonly?: boolean;
}
/**
 * Deprecated, please, use new components from folder redesigned
 * @deprecated
 */
export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, value, onChange, readonly } = props;

    const optionList = useMemo(
        () =>
            options?.map((opt) => (
                <option
                    className={cls.option}
                    value={opt.value}
                    key={opt.value}
                >
                    {opt.content}
                </option>
            )),
        [options],
    );

    const onChangeHandler = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            if (onChange) {
                onChange(e.target.value as T);
            }
        },
        [onChange],
    );

    const mods: Mods = {};

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
};
