import React, {
    memo, useCallback, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';

import { NotificationList } from '@/entities/Notification';
import { getUserAuthData } from '@/entities/User';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';

import { useGetNotifications, useUpdateNotification } from '../../api/notificationApi';

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
    const { data: notifications, isLoading, refetch } = useGetNotifications(
        { profileId: userId },
        { pollingInterval: 20000, refetchOnMountOrArgChange: true },
    );
    const [updateNotification] = useUpdateNotification();

    const handleNotification = useCallback((notificationId: string) => {
        if (notifications) {
            try {
                const notificationToUpdate = notifications.find((n) => n.id === notificationId);
                if (notificationToUpdate && !notificationToUpdate.isRead) {
                    updateNotification({ ...notificationToUpdate, isRead: true });
                }
            } catch (e) {
                console.log(e);
            } finally {
                refetch();
            }
        }
    }, [notifications, updateNotification, refetch]);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    const NotificationsCount = useMemo(() => {
        if (isLoading) {
            return null;
        }

        return notifications?.length !== 0
            ? (
                <div className={cls.notificationsCount}>
                    {String(notifications?.length)}
                </div>
            )
            : null;
    }, [isLoading, notifications?.length]);

    return !isMobile
        ? (
            <>
                { NotificationsCount }
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
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
            </>
        )
        : (
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
        );
});
