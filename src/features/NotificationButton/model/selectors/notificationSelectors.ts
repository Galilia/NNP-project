import { StateSchema } from '@/app/providers/StoreProvider';

export const getUnreadMessagesCount = (state: StateSchema) => {
    const { data } = state.notifications ?? [];

    if (!data) {
        return 0;
    }

    const unreadNotifications = data.filter((notification) => !notification.isRead);

    return unreadNotifications.length;
};
