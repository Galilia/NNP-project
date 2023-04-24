import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Notification } from '../../model/types/notifications';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Text } from '@/shared/ui/Text/Text';

interface NotificationListProps {
    className?: string;
    unreadMessagesCount?: number;
    onUpdate?: (newUnreadMessagesCount: number) => void;
    notifications?: Notification[];
    isLoading?: boolean;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const {
        className, unreadMessagesCount, onUpdate, notifications, isLoading,
    } = props;
    const { t } = useTranslation();

    if (notifications?.length === 0) {
        return (
            <div style={{ minWidth: '200px' }}>
                <Text text={t('Notifications not found')} />
            </div>
        );
    }

    if (isLoading) {
        return (
            <VStack
                gap="16"
                max
                className={classNames('', {}, [className])}
            >
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack
            gap="16"
            max
            className={classNames('', {}, [className])}
        >
            {notifications?.map((item) => <NotificationItem key={item.id} item={item} />)}
        </VStack>
    );
});
