import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { getRouteArticleCreate } from '@/shared/const/routerConst';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useScrollToElement } from '@/shared/lib/hooks/useScrollToElement/useScrollToElement';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const scrollToAboutMe = useScrollToElement('aboutMe');
    const scrollToProjects = useScrollToElement('projects');
    const scrollToContactMe = useScrollToElement('contactMe');

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <header
                        className={classNames(cls.NavbarRedesigned, {}, [
                            className,
                        ])}
                    >
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                off={
                    <header className={classNames(cls.Navbar, {}, [className])}>
                        <Text
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

                        <LoginModal
                            isOpen={isAuthModal}
                            onClose={onCloseModal}
                        />
                    </header>
                }
            />
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text
                className={cls.appName}
                title={t('navbar_name')}
                theme={TextTheme.INVERTED}
            />
            <HStack gap="32" justify="end">
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={scrollToAboutMe}
                >
                    {t('About')}
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={scrollToProjects}
                >
                    {t('Projects')}
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={scrollToContactMe}
                >
                    {t('Contact')}
                </Button>
            </HStack>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Login')}
            </Button>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                    withCaret
                />
            )}
        </header>
    );
});
