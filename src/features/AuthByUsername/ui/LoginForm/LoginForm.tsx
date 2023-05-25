import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { LoginFormProps } from '../../lib/utils/LoginForm.utils';
import {
    getLoginEmail,
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
} from '../../model/selectors/loginSelectors';
import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail';
import { signUpByEmail } from '../../model/services/signUpByEmail/signUpByEmail';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const forceUpdate = useForceUpdate();

    const onChangeEmail = useCallback(
        (value: string) => {
            dispatch(loginActions.setEmail(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onSignUpClick = useCallback(() => {
        dispatch(signUpByEmail({ email, password }));
    }, [dispatch, email, password]);

    const onLoginByEmailClick = useCallback(async () => {
        const result = await dispatch(loginByEmail({ email, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
            forceUpdate();
        }
    }, [dispatch, email, forceUpdate, onSuccess, password]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack gap="16">
                        {!isLoggedIn ? (
                            <Text title={t('Register')} />
                        ) : (
                            <Text title={t('Login')} />
                        )}
                        {error && (
                            <Text
                                text={t('Login or password is not correct')}
                                variant="error"
                            />
                        )}
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
                        {!isLoggedIn ? (
                            <Button
                                onClick={onSignUpClick}
                                className={cls.loginBtn}
                                disabled={isLoading}
                            >
                                {t('Sign Up')}
                            </Button>
                        ) : (
                            <Button
                                onClick={onLoginByEmailClick}
                                className={cls.loginBtn}
                                disabled={isLoading}
                            >
                                {t('Login')}
                            </Button>
                        )}
                        <Button
                            onClick={() => setIsLoggedIn((prev) => !prev)}
                            disabled={isLoading}
                        >
                            {!isLoggedIn
                                ? t('already registered? please, login!')
                                : t('dont have login, please, sign up!')}
                        </Button>
                    </VStack>
                }
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        {!isLoggedIn ? (
                            <TextDeprecated title={t('Register')} />
                        ) : (
                            <TextDeprecated title={t('Login')} />
                        )}
                        {error && (
                            <TextDeprecated
                                text={t('Login or password is not correct')}
                                theme={TextTheme.ERROR}
                            />
                        )}
                        <InputDeprecated
                            type="text"
                            className={cls.input}
                            placeholder={t('Enter email')}
                            label={t('Enter email')}
                            onChange={onChangeEmail}
                            value={email}
                        />
                        <InputDeprecated
                            type="text"
                            className={cls.input}
                            placeholder={t('Enter password')}
                            label={t('Enter password')}
                            onChange={onChangePassword}
                            value={password}
                        />

                        {!isLoggedIn ? (
                            <ButtonDeprecated
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSignUpClick}
                                className={cls.loginBtn}
                                disabled={isLoading}
                            >
                                {t('Sign Up')}
                            </ButtonDeprecated>
                        ) : (
                            <ButtonDeprecated
                                theme={ButtonTheme.OUTLINE}
                                onClick={onLoginByEmailClick}
                                className={cls.loginBtn}
                                disabled={isLoading}
                            >
                                {t('Login')}
                            </ButtonDeprecated>
                        )}
                        <ButtonDeprecated
                            theme={ButtonTheme.CLEAR}
                            onClick={() => setIsLoggedIn((prev) => !prev)}
                            disabled={isLoading}
                        >
                            {!isLoggedIn
                                ? t('already registered? please, login!')
                                : t('dont have login, please, sign up!')}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
