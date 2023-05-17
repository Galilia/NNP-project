import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { DropdownDirection } from '@/shared/types/ui';

import { classNames } from '../../../../../lib/classNames/classNames';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './Menu.module.scss';

export interface DropdownItem {
    /**
     * A boolean that, when true, indicates that the dropdown item is disabled.
     */
    disabled?: boolean;
    /**
     * The content to be displayed for the dropdown item.
     */
    content?: ReactNode;
    /**
     * Function to handle the click event when the dropdown item is clicked.
     */
    onClick?: () => void;
    /**
     * The URL for the dropdown item when used as a link.
     */
    href?: string;
}

interface MenuDropdownProps {
    /**
     * Optional class name for additional custom styling.
     */
    className?: string;
    /**
     * An array of dropdown items.
     */
    items: DropdownItem[];
    /**
     * The trigger element that opens the menu dropdown.
     */
    trigger?: ReactNode;
    /**
     * The direction in which the menu dropdown is displayed.
     */
    direction?: DropdownDirection;
}

export function MenuDropdown(props: MenuDropdownProps) {
    const { className, trigger, items, direction = 'bottom right' } = props;

    const menuClasses = [mapDirectionClass[direction], popupCls.menu];

    return (
        <Menu
            as="div"
            className={classNames(cls.MenuDropdown, {}, [
                className,
                popupCls.popup,
            ])}
        >
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(
                                cls.item,
                                { [popupCls.active]: active },
                                [],
                            )}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                                key={`dropdown-key-${index}`}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            disabled={item.disabled}
                            key={`dropdown-key-${index}`}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
