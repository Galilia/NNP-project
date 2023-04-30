import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { InputWithCaret } from '@/shared/ui/InputWithCaret';
import { HStack } from '@/shared/ui/Stack';

import cls from './CommentForm.module.scss';

export interface CommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
    onCommentTextChange: (text: string) => void;
    text: string;
    error?: string;
}

const CommentForm = memo((props: CommentFormProps) => {
    const {
        className, onSendComment, onCommentTextChange, text, error,
    } = props;
    const { t } = useTranslation();

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        // <DynamicModuleLoader reducers={reducers}>
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
        // </DynamicModuleLoader>
    );
});

export default CommentForm;
