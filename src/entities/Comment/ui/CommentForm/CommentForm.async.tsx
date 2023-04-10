import { FC, lazy } from 'react';
import { CommentFormProps } from './CommentForm';

export const CommentFormAsync = lazy<FC<CommentFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./CommentForm')), 1500);
}));
