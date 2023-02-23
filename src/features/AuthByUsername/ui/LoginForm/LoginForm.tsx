import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { InputWithCaret } from 'shared/ui/InputWithCaret/InputWithCaret';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import {
    loginByUsername,
} from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginSelectors } from '../../model/selectors/loginSelectors';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    withCaret?: boolean;
}

export const LoginForm = memo(({ className, withCaret }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(loginSelectors);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Authorization from')} />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            {error && <Text text={error} theme="error" />}
            {!withCaret ? (
                <>
                    <Input
                        type="text"
                        className={cls.input}
                        placeholder={t('Enter username')}
                        label={t('Enter username')}
                        autofocus
                        onChange={onChangeUsername}
                        value={username}
                    />
                    <Input
                        type="text"
                        className={cls.input}
                        placeholder={t('Enter password')}
                        label={t('Enter password')}
                        onChange={onChangePassword}
                        value={password}
                    />
                </>
            ) : (
                <>
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
                </>
            )}
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                className={cls.loginBtn}
                disabled={isLoading}
            >
                {t('login')}
            </Button>
        </div>
    );
});
