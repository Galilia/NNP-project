import { Notification } from '@/entities/Notification';
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
                    isRead: false,
                    _sort: 'date',
                    _order: 'desc',
                },
            }),
        }),
        updateNotification: build.mutation<void, Notification>({
            query: ({ id, ...rest }) => ({
                url: `/notifications/${id}`,
                method: 'PATCH',
                body: { ...rest, isRead: true },
            }),
        }),
    }),
});

export const useGetNotifications = notificationApi.useGetNotificationsQuery;
export const useUpdateNotification = notificationApi.useUpdateNotificationMutation;
