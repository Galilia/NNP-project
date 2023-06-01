import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { getRouteArticleCreate } from '@/shared/const/routerConst';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from '../Navbar/Navbar.module.scss';

export interface NavbarDeprecatedProps {
    className?: string;
    onShowModal: () => void;
    onCloseModal: () => void;
    isAuthModal: boolean;
}

export const NavbarDeprecated = (props: NavbarDeprecatedProps) => {
    const { className, onShowModal, onCloseModal, isAuthModal } = props;
    const authData = useSelector(getUserAuthData);
    const { t } = useTranslation();

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <TextDeprecated
                    className={cls.appName}
                    title={t('Galilia App')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    className={cls.createLink}
                    theme={AppLinkTheme.SECONDARY}
                    to={getRouteArticleCreate()}
                >
                    {t('Create Article')}
                </AppLink>

                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>

                {/* <LoginModal */}
                {/*     isOpen={isAuthModal} */}
                {/*     onClose={onCloseModal} */}
                {/* /> */}
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <TextDeprecated
                className={cls.appName}
                title={t('navbar_name')}
                theme={TextTheme.INVERTED}
            />
            <ButtonDeprecated
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Login')}
            </ButtonDeprecated>
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
