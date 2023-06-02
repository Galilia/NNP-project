import React, { memo, ReactElement } from 'react';

import { PortfolioScrollButtons } from '@/entities/Portfolio';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { LangSwitcher } from '../../../LangSwitcher';
import { ThemeSwitcher } from '../../../ThemeSwitcher';

import cls from './PortfolioDrawerMenu.module.scss';

interface PortfolioDrawerMenuProps {
    className?: string;
    trigger: ReactElement;
    onCloseDrawer: () => void;
    LoginButton: ReactElement;
    isOpen: boolean;
}

export const PortfolioDrawerMenu = memo((props: PortfolioDrawerMenuProps) => {
    const { className, trigger, onCloseDrawer, LoginButton, isOpen } = props;

    return (
        <>
            {trigger}
            <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                <VStack justify="center" align="center" gap="32" max>
                    {LoginButton}
                    <div className={cls.breakLine} />
                    <PortfolioScrollButtons onCloseDrawer={onCloseDrawer} />
                    <HStack
                        gap="32"
                        max
                        justify="center"
                        className={cls.switchers}
                    >
                        <ThemeSwitcher />
                        <LangSwitcher className={cls.lang} />
                    </HStack>
                </VStack>
            </Drawer>
        </>
    );
});
