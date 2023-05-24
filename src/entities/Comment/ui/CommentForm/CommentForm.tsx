import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { InputWithCaret } from '@/shared/ui/deprecated/InputWithCaret';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './CommentForm.module.scss';

export interface CommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
    onCommentTextChange: (text: string) => void;
    text: string;
    error?: string;
}

const CommentForm = memo((props: CommentFormProps) => {
    const { className, onSendComment, onCommentTextChange, text, error } =
        props;
    const { t } = useTranslation();

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card padding="24" border="round" fullWidth>
                    <HStack
                        data-testid="AddCommentForm"
                        justify="between"
                        max
                        gap="16"
                        className={classNames(cls.CommentFormRedesigned, {}, [
                            className,
                        ])}
                    >
                        <Input
                            placeholder={t('Add comment')}
                            value={text}
                            onChange={onCommentTextChange}
                            className={cls.input}
                            data-testid="AddCommentForm.Input"
                        />
                        <Button
                            variant="outline"
                            onClick={onSendHandler}
                            data-testid="AddCommentForm.Button"
                        >
                            {t('Send')}
                        </Button>
                    </HStack>
                </Card>
            }
            off={
                <HStack
                    data-testid="AddCommentForm"
                    justify="between"
                    max
                    className={classNames(cls.CommentForm, {}, [className])}
                >
                    <InputWithCaret
                        placeholder={t('Add comment')}
                        value={text}
                        onChange={onCommentTextChange}
                        className={cls.input}
                        data-testid="AddCommentForm.Input"
                    />
                    <ButtonDeprecated
                        theme={ButtonTheme.OUTLINE}
                        onClick={onSendHandler}
                        data-testid="AddCommentForm.Button"
                    >
                        {t('Send')}
                    </ButtonDeprecated>
                </HStack>
            }
        />
    );
});

export default CommentForm;
