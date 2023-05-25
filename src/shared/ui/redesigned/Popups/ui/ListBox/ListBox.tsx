import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';

import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button';
import { Icon } from '../../../Icon';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './ListBox.module.scss';

export interface ListBoxItem<T extends string> {
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

interface ListBoxProps<T extends string> {
    /**
     * An array of list box items.
     */
    items?: ListBoxItem<T>[];
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * The currently selected value of the list box.
     */
    value?: T;
    /**
     * The default value for the list box if no value is provided.
     */
    defaultValue?: string | null | undefined;
    /**
     * Function to handle the change event when the list box value is selected.
     */
    onChange?: (value: T) => void;
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

export function ListBox<T extends string>(props: ListBoxProps<T>) {
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

    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);

    return (
        <HStack max gap="8">
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                value={value}
                onChange={onChange}
            >
                {/* // TODO fix bug Button in Button */}
                <HListBox.Button
                    as={Button}
                    variant="filled"
                    // TODO disabled
                    // disabled={readonly}
                    addonRight={<Icon Svg={ArrowIcon} />}
                    className={cls.trigger}
                >
                    {selectedItem?.content ?? defaultValue}
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
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                        [popupCls.selected]: selected,
                                    })}
                                >
                                    {selected}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
