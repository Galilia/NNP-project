import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import {
    PortfolioDrawerMenu,
    PortfolioDropdownMenu,
} from '@/features/Portfolio';
import ListIcon from '@/shared/assets/icons/burger.svg';
import {
    MEDIUM_SCREEN_BREAKPOINT,
    MOBILE_TABLET_BREAKPOINT,
} from '@/shared/const/breakpoints';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Button } from '@/shared/ui/redesigned/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from '../Navbar/Navbar.module.scss';

export interface NavbarRedesignedProps {
    className?: string;
    onShowModal: () => void;
    onCloseModal: () => void;
    isAuthModal: boolean;
}

export const NavbarRedesigned = (props: NavbarRedesignedProps) => {
    const { className, onShowModal, onCloseModal, isAuthModal } = props;

    const authData = useSelector(getUserAuthData);
    const { t } = useTranslation();
    const isMobile = useDevice(MOBILE_TABLET_BREAKPOINT);
    const isMediumScreen = useDevice(MEDIUM_SCREEN_BREAKPOINT);
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = useMemo(
        () => <Icon Svg={ListIcon} clickable onClick={onOpenDrawer} />,
        [onOpenDrawer],
    );

    const LoginButton = useMemo(
        () => (
            <Button onClick={onShowModal} variant="clear">
                {t('Login')}
            </Button>
        ),
        [onShowModal, t],
    );

    const menuProps = useMemo(() => {
        return {
            onCloseDrawer,
            trigger,
            LoginButton,
            isOpen,
        };
    }, [onCloseDrawer, trigger, LoginButton, isOpen]);

    const Menu = useMemo(() => {
        if (isMobile) {
            return <PortfolioDrawerMenu {...menuProps} />;
        }
        if (isMediumScreen) {
            return <PortfolioDropdownMenu {...menuProps} />;
        }

        return (
            <Button className={cls.links} onClick={onShowModal} variant="clear">
                {t('Login')}
            </Button>
        );
    }, [isMediumScreen, isMobile, menuProps, onShowModal, t]);

    if (authData) {
        return (
            <header
                className={classNames(cls.NavbarRedesigned, {}, [className])}
            >
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            {Menu}

            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                    withCaret
                />
            )}
        </header>
    );
};
