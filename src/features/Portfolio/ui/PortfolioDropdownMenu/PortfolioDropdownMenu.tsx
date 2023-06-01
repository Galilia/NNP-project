import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { PortfolioScrollButtons } from '@/entities/Portfolio';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './PortfolioDropdownMenu.module.scss';

interface PortfolioDropdownMenuProps {
    className?: string;
    trigger: ReactElement;
    LoginButton: ReactElement;
}

export const PortfolioDropdownMenu = (props: PortfolioDropdownMenuProps) => {
    const { className, trigger, LoginButton } = props;
    const { t } = useTranslation();

    return (
        <Popover
            className={classNames('', {}, [className])}
            direction="bottom left"
            trigger={trigger}
        >
            <VStack justify="center" align="center" gap="32">
                {LoginButton}
                <div className={cls.breakLine} />
                <PortfolioScrollButtons />
            </VStack>
        </Popover>
    );
};
