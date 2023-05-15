import { memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { CommentForm, CommentList } from '@/entities/Comment';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';

import {
    getAddCommentFormError,
    getAddCommentFormText,
    getArticleCommentsIsLoading,
} from '../../model/selectors/ArticleCommentsSelectors';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    articleCommentsActions,
    articleCommentsReducer,
} from '../../model/slices/ArticleCommentsSlice';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';

import cls from './ArticleComments.module.scss';

interface ArticleCommentsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    addCommentForm: articleCommentsReducer,
};

export const ArticleComments = memo((props: ArticleCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(articleCommentsActions.setText(value));
        },
        [dispatch],
    );

    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.ArticleComments, {}, [className])}
        >
            <Text
                size={TextSize.L}
                title={t('Comments')}
                className={cls.commentTitle}
            />
            <Suspense fallback={<Loader />}>
                <DynamicModuleLoader reducers={reducers}>
                    <CommentForm
                        onSendComment={onSendComment}
                        onCommentTextChange={onCommentTextChange}
                        text={text}
                        error={error}
                    />
                </DynamicModuleLoader>
            </Suspense>
            <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
    );
});
