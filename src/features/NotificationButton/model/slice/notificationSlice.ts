import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationSchema } from '../types/notificationSchema';
import { Notification } from '@/entities/Notification/model/types/notifications';

const initialState: { unreadMessagesCount: number } = {
    unreadMessagesCount: 0,
};

const notificationSlice = createSlice({
    name: 'unreadMessages',
    initialState,
    reducers: {
        setUnreadMessagesCount: (state, action: PayloadAction<number>) => {
            state.unreadMessagesCount = action.payload;
        },
        updateNotification(state, action: PayloadAction<Partial<Notification>>) {
        },
    },
});

export const { actions: notificationActions } = notificationSlice;
export const { reducer: notificationReducer } = notificationSlice;
