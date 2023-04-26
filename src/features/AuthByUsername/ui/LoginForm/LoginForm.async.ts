import { FC, lazy } from 'react';

import { LoginFormProps } from '../../lib/utils/LoginForm.utils';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => import('./LoginForm'));
