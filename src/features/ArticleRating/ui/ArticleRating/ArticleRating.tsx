import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useTranslationProps } from '@/shared/lib/hooks/useTranslationProps/useTranslationProps';
import { Skeleton } from '@/shared/ui/Skeleton';

import {
    useGetArticleRating,
    useRateArticle,
} from '../../api/articleRatingApi';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const userData = useSelector(getUserAuthData);
    const userId = userData?.id ?? '';
    const [rateArticleMutation] = useRateArticle();
    const { data, isLoading } = useGetArticleRating({
        userId,
        articleId,
    });
    const rating = data?.[0];
    const _rateTheArticle = useTranslationProps('Rate the article');
    const _leaveYourFeedback = useTranslationProps(
        'Leave your feedback, please',
    );

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId,
                    articleId,
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                console.log(e);
            }
        },
        [articleId, rateArticleMutation, userId],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback);
        },
        [handleRateArticle],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount);
        },
        [handleRateArticle],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={_rateTheArticle}
            feedbackTitle={_leaveYourFeedback}
            hasFeedback
        />
    );
});

export default ArticleRating;
