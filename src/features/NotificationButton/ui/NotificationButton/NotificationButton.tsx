import React, {
    memo, useCallback, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { useGetNotifications, useUpdateNotification } from '../../api/notificationApi';
import cls from './NotificationButton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover } from '@/shared/ui/Popups';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { getUserAuthData } from '@/entities/User';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const isMobile = useDevice();
    const [isOpen, setIsOpen] = useState(false);
    const userData = useSelector(getUserAuthData);
    const userId = userData?.id ?? '';
    const { data: notifications, isLoading } = useGetNotifications({ profileId: userId }, { pollingInterval: 5000 });
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
            }
        }
    }, [updateNotification, notifications]);

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
