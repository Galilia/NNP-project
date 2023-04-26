import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

// TODO
// eslint-disable-next-line galilia-plugin/public-api-imports,galilia-plugin/layer-imports,import/order
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '@/features/ArticleComments/model/selectors/ArticleCommentsSelectors';

// eslint-disable-next-line galilia-plugin/public-api-imports,galilia-plugin/layer-imports
import {
    articleCommentsActions,
    articleCommentsReducer,
} from '@/features/ArticleComments/model/slices/ArticleCommentsSlice';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { InputWithCaret } from '@/shared/ui/InputWithCaret';
import { HStack } from '@/shared/ui/Stack';

import cls from './CommentForm.module.scss';

export interface CommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: articleCommentsReducer,
};

const CommentForm = memo(({ className, onSendComment }: CommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(articleCommentsActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack justify="between" max className={classNames(cls.CommentForm, {}, [className])}>
                <InputWithCaret
                    placeholder={t('Add comment')}
                    value={text}
                    onChange={onCommentTextChange}
                    className={cls.input}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Send')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default CommentForm;
