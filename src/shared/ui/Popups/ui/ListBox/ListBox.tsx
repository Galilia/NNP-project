import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './ListBox.module.scss';

export interface ListBoxItem {
    /**
     * The value associated with the list box item.
     */
    value: string;
    /**
     * The content to be displayed for the list box item.
     */
    content: ReactNode;
    /**
     * A boolean that, when true, indicates that the list box item is disabled.
     */
    disabled?: boolean;
}

interface ListBoxProps {
    /**
     * An array of list box items.
     */
    items?: ListBoxItem[];
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * The currently selected value of the list box.
     */
    value?: string;
    /**
     * The default value for the list box if no value is provided.
     */
    defaultValue?: string | null | undefined;
    /**
     * Function to handle the change event when the list box value is selected.
     */
    onChange?: (value: string) => void;
    /**
     * A boolean that, when true, indicates that the list box is read-only.
     */
    readonly?: boolean;
    /**
     * The direction in which the list box options are displayed.
     */
    direction?: DropdownDirection;
    /**
     * The label for the list box.
     */
    label?: string | null | undefined;
}

export function ListBox(props: ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack max gap="8">
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <HListBox
                as="div"
                className={classNames(cls.ListBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button as="div" className={popupCls.trigger}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                        },
                                        [className],
                                    )}
                                >
                                    {selected && '=> '}
                                    {item.value}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
