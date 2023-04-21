import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    useGetProfileRating,
    useUpdateNotificationProfile,
    useUpdateRateProfile,
} from '../../api/profileRatingApi';
import { RatingCard } from '@/entities/Rating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { getUserAuthData } from '@/entities/User';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const {
        className,
        profileId,
    } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const userId = userData?.id ?? '';
    const username = userData?.username ?? '';
    const [rateProfileMutation] = useUpdateRateProfile();
    const [notificationProfileMutation] = useUpdateNotificationProfile();
    const {
        data,
        isLoading,
    } = useGetProfileRating({
        userId,
        profileId,
    });
    const rating = data?.[0];
    const _rateTheProfile = t('Rate the profile');
    const _leaveYourFeedback = t('Leave your feedback, please');

    const handleRateProfile = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateProfileMutation({
                userId,
                profileId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [profileId, rateProfileMutation, userId]);

    const handleNotifyProfile = useCallback(() => {
        try {
            notificationProfileMutation({
                userId,
                profileId,
                title: `User ${username} liked you!`,
                description: 'You\'ve been Liked!',
                date: (new Date()).toString(),
            });
        } catch (e) {
            console.log(e);
        }
    }, [notificationProfileMutation, profileId, userId, username]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateProfile(starsCount, feedback);
        handleNotifyProfile();
    }, [handleNotifyProfile, handleRateProfile]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateProfile(starsCount);
        handleNotifyProfile();
    }, [handleNotifyProfile, handleRateProfile]);

    if (userId === profileId) {
        return null;
    }

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={_rateTheProfile}
            feedbackTitle={_leaveYourFeedback}
            hasFeedback
        />
    );
});

export default ProfileRating;
