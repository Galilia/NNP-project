import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { InputWithCaret } from 'shared/ui/InputWithCaret/InputWithCaret';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    withCaret?: boolean;
}

export const LoginForm = ({ className, withCaret }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            {!withCaret ? (
                <>
                    <Input
                        type="text"
                        className={cls.input}
                        placeholder={t('Enter username')}
                        label={t('Enter username')}
                        autofocus
                    />
                    <Input
                        type="text"
                        className={cls.input}
                        placeholder={t('Enter password')}
                        label={t('Enter password')}
                    />
                </>
            ) : (
                <>
                    <InputWithCaret
                        type="text"
                        className={cls.input}
                        placeholder={t('Enter username')}
                        autofocus
                    />
                    <InputWithCaret
                        type="text"
                        className={cls.input}
                        placeholder={t('Enter password')}
                    />
                </>
            )}
            <Button className={cls.loginBtn}>{t('login')}</Button>
        </div>
    );
};
