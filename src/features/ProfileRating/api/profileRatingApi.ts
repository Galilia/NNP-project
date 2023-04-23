import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';
import { NotificationList } from '@/entities/Notification';

interface ProfileRatingArg {
    userId: string;
    profileId: string;
}

interface RateProfileArg {
    userId: string;
    profileId: string;
    rate: number;
    feedback?: string;
}

interface NotificationProfileArg {
    userId: string;
    profileId: string;
    title: string;
    description: string;
    date: string;
    isNew: boolean;
}

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Rating[], ProfileRatingArg>({
            query: ({ userId, profileId }) => ({
                url: '/profile-ratings',
                params: {
                    userId,
                    profileId,
                },
            }),
        }),
        rateProfile: build.mutation<void, RateProfileArg>({
            query: (arg) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
        notificationProfile: build.mutation<void, NotificationProfileArg>({
            query: (arg) => ({
                url: '/notifications',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery;
export const useUpdateRateProfile = profileRatingApi.useRateProfileMutation;
export const useUpdateNotificationProfile = profileRatingApi.useNotificationProfileMutation;
