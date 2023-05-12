import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { getRouteArticleCreate } from '@/shared/const/routerConst';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const scrollToAboutMe = () => {
        const aboutMeElement = document.querySelector('#aboutMe');
        if (aboutMeElement) {
            aboutMeElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToProjects = () => {
        const projectsElement = document.querySelector('#projects');
        if (projectsElement) {
            projectsElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContactMe = () => {
        const contactMeElement = document.querySelector('#contactMe');
        if (contactMeElement) {
            contactMeElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (authData) {
        return (
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

                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text
                className={cls.appName}
                title={t('navbar_name')}
                theme={TextTheme.INVERTED}
            />
            <HStack gap="32" max justify="end">
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={cls.links}
                    onClick={scrollToAboutMe}
                >
                    {t('About')}
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={cls.links}
                    onClick={scrollToProjects}
                >
                    {t('Projects')}
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR}
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
