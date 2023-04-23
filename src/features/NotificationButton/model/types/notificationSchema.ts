import { Notification } from '@/entities/Notification';

export interface NotificationSchema {
    data: Notification[];
    unreadMessagesCount: number;
}
