import { FC, lazy } from 'react';
import {
    LoginFormWithCaretProps,
} from '../LoginFormWithCaret/LoginFormWithCaret';

export const LoginFormWithCaretAsync = lazy<FC<LoginFormWithCaretProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./LoginFormWithCaret')), 1500);
}));
