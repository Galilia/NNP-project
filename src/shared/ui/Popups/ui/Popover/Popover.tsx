import { Popover as HPopover } from '@headlessui/react';
import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import { DropdownDirection } from '../../../../types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger?: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
    const { className, trigger, direction = 'bottom right', children } = props;
    const { t } = useTranslation();
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
