import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useGetNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { getUserAuthData } from '@/entities/User';
import { Text } from '@/shared/ui/Text/Text';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const userId = userData?.id ?? '';
    const { data, isLoading } = useGetNotifications({
        profileId: userId,
    }, {
        pollingInterval: 5000,
    });

    if (data?.length === 0) {
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
            {data?.map((item) => <NotificationItem key={item.id} item={item} />)}
        </VStack>
    );
});
