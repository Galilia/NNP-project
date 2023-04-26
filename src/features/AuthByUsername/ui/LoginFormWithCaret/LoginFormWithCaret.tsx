import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { LoginFormProps } from '../../lib/utils/LoginForm.utils';
import {
    loginByUsername,
} from '../../model/services/loginByUsername/loginByUsername';
import {
    getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername,
} from '../../model/selectors/loginSelectors';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginFormWithCaret.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextTheme } from '@/shared/ui/Text';
import { InputWithCaret } from '@/shared/ui/InputWithCaret';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginFormWithCaret = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Authorization')} />
                {error && <Text text={t('Login or password is not correct')} theme={TextTheme.ERROR} />}
                <InputWithCaret
                    type="text"
                    className={cls.input}
                    placeholder={t('Enter username')}
                    autofocus
                    onChange={onChangeUsername}
                    value={username}
                />
                <InputWithCaret
                    type="text"
                    className={cls.input}
                    placeholder={t('Enter password')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onLoginClick}
                    className={cls.loginBtn}
                    disabled={isLoading}
                >
                    {t('login')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginFormWithCaret;
