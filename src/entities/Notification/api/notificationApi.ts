import { Notification } from '../model/types/notifications';
import { rtkApi } from '@/shared/api/rtkApi';

interface NotificationArg {
    profileId: string;
}

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], NotificationArg>({
            query: ({ profileId }) => ({
                url: '/notifications',
                params: {
                    profileId,
                    _sort: 'date',
                    _order: 'desc',
                },
            }),
        }),
    }),
});

export const useGetNotifications = notificationApi.useGetNotificationsQuery;
