import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import {
    memo, useCallback, useState,
} from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { signUpByEmail } from '../../model/services/signUpByEmail/signUpByEmail';
import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail';
import {
    getLoginEmail, getLoginError, getLoginIsLoading, getLoginPassword,
} from '../../model/selectors/loginSelectors';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onChangeEmail = useCallback((value: string) => {
        dispatch(loginActions.setEmail(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onSignUpClick = useCallback(() => {
        dispatch(signUpByEmail({ email, password }));
    }, [dispatch, email, password]);

    const onLoginByEmailClick = useCallback(() => {
        dispatch(loginByEmail({ email, password }));
    }, [dispatch, email, password]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                { !isLoggedIn ? <Text title={t('Register')} /> : <Text title={t('Login')} /> }
                {error && <Text text={t('Login or password is not correct')} theme={TextTheme.ERROR} />}
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Enter email')}
                    label={t('Enter email')}
                    onChange={onChangeEmail}
                    value={email}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Enter password')}
                    label={t('Enter password')}
                    onChange={onChangePassword}
                    value={password}
                />

                { !isLoggedIn ? (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onSignUpClick}
                        className={cls.loginBtn}
                        disabled={isLoading}
                    >
                        {t('Sign Up')}
                    </Button>
                ) : (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onLoginByEmailClick}
                        className={cls.loginBtn}
                        disabled={isLoading}
                    >
                        {t('Login')}
                    </Button>
                )}
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={() => setIsLoggedIn((prev) => !prev)}
                    disabled={isLoading}
                >
                    {!isLoggedIn ? t('already registered? please, login!') : t('dont have login, please, sign up!')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
