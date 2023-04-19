import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from '../../../../types/ui';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Popover.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface PopoverProps {
    className?: string;
    trigger?: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
    const {
        className, trigger, direction = 'bottom right', children,
    } = props;
    const { t } = useTranslation();
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
