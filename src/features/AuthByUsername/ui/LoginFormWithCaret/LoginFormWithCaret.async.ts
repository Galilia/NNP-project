import { FC, lazy } from 'react';

import { LoginFormProps } from '../../lib/utils/LoginForm.utils';

export const LoginFormWithCaretAsync = lazy<FC<LoginFormProps>>(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./LoginFormWithCaret')), 1500);
        }),
);
