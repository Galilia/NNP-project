import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import { ProfileCardWithCaret } from '../ProfileCardWithCaret/ProfileCardWithCaret';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
    readonly?: boolean;
    withCaret?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        withCaret,
        onChangeFirstname,
        onChangeLastname,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
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

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} alt="avatar" />
                    </div>
                )}
                { withCaret ? (
                    <ProfileCardWithCaret
                        data={data}
                        onChangeFirstname={onChangeFirstname}
                        onChangeLastname={onChangeLastname}
                        onChangeAge={onChangeAge}
                        onChangeCity={onChangeCity}
                        onChangeUsername={onChangeUsername}
                        onChangeAvatar={onChangeAvatar}
                        onChangeCurrency={onChangeCurrency}
                        onChangeCountry={onChangeCountry}
                        readonly={readonly}
                    />
                ) : (
                    <>
                        <Input
                            label={t('your_name')}
                            value={data?.first}
                            placeholder={t('your_name')}
                            className={cls.input}
                            onChange={onChangeFirstname}
                            readonly={readonly}
                        />
                        <Input
                            label={t('your_surname')}
                            value={data?.lastname}
                            placeholder={t('your_surname')}
                            className={cls.input}
                            onChange={onChangeLastname}
                            readonly={readonly}
                        />
                        <Input
                            label={t('your_age')}
                            value={data?.age}
                            placeholder={t('your_age')}
                            className={cls.input}
                            onChange={onChangeAge}
                            readonly={readonly}
                            onlyNumbers
                        />
                        <Input
                            label={t('your_city')}
                            value={data?.city}
                            placeholder={t('your_city')}
                            className={cls.input}
                            onChange={onChangeCity}
                            readonly={readonly}
                        />
                        <Input
                            label={t('your_username')}
                            value={data?.username}
                            placeholder={t('your_username')}
                            className={cls.input}
                            onChange={onChangeUsername}
                            readonly={readonly}
                        />
                        <Input
                            label={t('your_avatar')}
                            value={data?.avatar}
                            placeholder={t('your_avatar')}
                            className={cls.input}
                            onChange={onChangeAvatar}
                            readonly={readonly}
                        />
                        <CurrencySelect
                            className={cls.input}
                            value={data?.currency}
                            onChange={onChangeCurrency}
                            readonly={readonly}
                        />
                        <CountrySelect
                            className={cls.input}
                            value={data?.country}
                            onChange={onChangeCountry}
                            readonly={readonly}
                        />
                    </>
                )}
            </div>
        </div>
    );
};
