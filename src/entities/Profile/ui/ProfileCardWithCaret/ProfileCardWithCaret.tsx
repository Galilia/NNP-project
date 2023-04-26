import { useTranslation } from 'react-i18next';

import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { InputWithCaret } from '@/shared/ui/InputWithCaret';

import { Profile } from '../../model/types/profile';

import cls from './ProfileCardWithCaret.module.scss';

interface ProfileCardWithInputProps {
    className?: string;
    data?: Profile;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
    readonly?: boolean;
}

export const ProfileCardWithCaret = (props: ProfileCardWithInputProps) => {
    const {
        data,
        onChangeFirstname,
        onChangeLastname,
        readonly,
        className,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    return (
        <>
            <InputWithCaret
                value={data?.first}
                placeholder={t('your_name')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <InputWithCaret
                value={data?.lastname}
                placeholder={t('your_surname')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />
            <InputWithCaret
                value={data?.age}
                placeholder={t('your_age')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
                onlyNumbers
            />
            <InputWithCaret
                value={data?.city}
                placeholder={t('your_city')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <InputWithCaret
                value={data?.username}
                placeholder={t('your_username')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <InputWithCaret
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
    );
};
