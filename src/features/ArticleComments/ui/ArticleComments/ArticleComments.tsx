import { useTranslation } from 'react-i18next';
import { memo, Suspense, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentForm, CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import {
    getArticleComments,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import {
    getArticleCommentsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/commentsSelectors';
import {
    addCommentForArticle,
} from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { VStack } from 'shared/ui/Stack';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './ArticleComments.module.scss';

interface ArticleCommentsProps {
    className?: string;
    id?: string
}

export const ArticleComments = memo((props: ArticleCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <VStack gap="16" max className={classNames(cls.ArticleComments, {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Comments')}
                className={cls.commentTitle}
            />
            <Suspense fallback={<Loader />}>
                <CommentForm onSendComment={onSendComment} />
            </Suspense>
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
});
