import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { InputWithCaret } from 'shared/ui/InputWithCaret/InputWithCaret';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    loginByUsername,
} from '../../model/services/loginByUsername/loginByUsername';
import { loginSelectors } from '../../model/selectors/loginSelectors';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginFormWithCaret.module.scss';

interface LoginFormWithCaretProps {
    className?: string;
}

export const LoginFormWithCaret = memo(({ className }: LoginFormWithCaretProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, email, password, error, isLoading,
    } = useSelector(loginSelectors);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangeEmail = useCallback((value: string) => {
        dispatch(loginActions.setEmail(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
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
    );
});
