import React, { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { NotificationList } from '@/entities/Notification';
import { getUserAuthData } from '@/entities/User';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

import {
    useGetNotifications,
    useUpdateNotification,
} from '../../api/notificationApi';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const isMobile = useDevice();
    const [isOpen, setIsOpen] = useState(false);
    const userData = useSelector(getUserAuthData);
    const userId = userData?.id ?? '';
    const {
        data: notifications,
        isLoading,
        refetch,
    } = useGetNotifications(
        { profileId: userId },
        { pollingInterval: 20000, refetchOnMountOrArgChange: true },
    );
    const [updateNotification] = useUpdateNotification();

    const handleNotification = useCallback(
        (notificationId: string) => {
            if (notifications) {
                try {
                    const notificationToUpdate = notifications.find(
                        (n) => n.id === notificationId,
                    );
                    if (notificationToUpdate && !notificationToUpdate.isRead) {
                        updateNotification({
                            ...notificationToUpdate,
                            isRead: true,
                        });
                    }
                } catch (e) {
                    console.log(e);
                } finally {
                    refetch();
                }
            }
        },
        [notifications, updateNotification, refetch],
    );

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
            }
            off={
                <ButtonDeprecated
                    onClick={onOpenDrawer}
                    theme={ButtonTheme.CLEAR}
                >
                    <IconDeprecated Svg={NotificationIconDeprecated} inverted />
                </ButtonDeprecated>
            }
        />
    );

    return (
        <div>
            {!isMobile ? (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Popover
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList
                                className={cls.notifications}
                                handleNotification={handleNotification}
                                notifications={notifications}
                                isLoading={isLoading}
                            />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList
                                className={cls.notifications}
                                handleNotification={handleNotification}
                                notifications={notifications}
                                isLoading={isLoading}
                            />
                        </PopoverDeprecated>
                    }
                />
            ) : (
                <>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList
                            handleNotification={handleNotification}
                            notifications={notifications}
                            isLoading={isLoading}
                        />
                    </Drawer>
                </>
            )}
        </div>
    );
});
