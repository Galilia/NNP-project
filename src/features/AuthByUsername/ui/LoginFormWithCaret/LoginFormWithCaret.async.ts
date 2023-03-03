import { FC, lazy } from 'react';
import { LoginFormProps } from '../../lib/utils/LoginForm.utils';

export const LoginFormWithCaretAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./LoginFormWithCaret')), 1500);
}));
