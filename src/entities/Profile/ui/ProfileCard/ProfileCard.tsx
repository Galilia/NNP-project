import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import {
    ProfileCardWithCaret,
} from 'entities/Profile/ui/ProfileCardWithCaret/ProfileCardWithCaret';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    onChangeFirstname: (value?: string) => void;
    onChangeLastname: (value?: string) => void;
    onChangeCity: (value?: string) => void;
    onChangeAge: (value?: string) => void;
    readonly?: boolean;
    withCaret?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        onChangeFirstname,
        onChangeLastname,
        readonly,
        withCaret,
        onChangeCity,
        onChangeAge,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    text={t('Please, update page')}
                    title={t('Error happened')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                { withCaret ? (
                    <ProfileCardWithCaret
                        first={data?.first}
                        lastname={data?.lastname}
                        age={data?.age}
                        city={data?.city}
                        onChangeFirstname={onChangeFirstname}
                        onChangeLastname={onChangeLastname}
                        onChangeAge={onChangeAge}
                        onChangeCity={onChangeCity}
                        readonly={readonly}
                    />
                ) : (
                    <>
                        <Text text={t('your_name')} />
                        <Input
                            value={data?.first}
                            placeholder={t('your_name')}
                            className={cls.input}
                            onChange={onChangeFirstname}
                            readonly={readonly}
                        />
                        <Text text={t('your_surname')} />
                        <Input
                            value={data?.lastname}
                            placeholder={t('your_surname')}
                            className={cls.input}
                            onChange={onChangeLastname}
                            readonly={readonly}
                        />
                        <Input
                            value={data?.age}
                            placeholder={t('your_age')}
                            className={cls.input}
                            onChange={onChangeAge}
                            readonly={readonly}
                            onlyNumbers
                        />
                        <Input
                            value={data?.city}
                            placeholder={t('your_city')}
                            className={cls.input}
                            onChange={onChangeCity}
                            readonly={readonly}
                        />
                    </>
                )}
            </div>
        </div>
    );
};
