import { useTranslation } from 'react-i18next';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import {
    Text as TextDeprecated,
    TextTheme,
    TextAlign,
} from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { ProfileCardWithCaret } from '../ProfileCardWithCaret/ProfileCardWithCaret';

import cls from './ProfileCardDeprecated.module.scss';

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation();

    return (
        <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCard, {}, [cls.error])}
        >
            <TextDeprecated
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align={TextAlign.CENTER}
            />
        </HStack>
    );
};

export const ProfileCardDeprecatedLoader = () => {
    return (
        <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCard, { [cls.loading]: true })}
        >
            <Loader />
        </HStack>
    );
};

export const ProfileCardDeprecated = (props: ProfileCardProps) => {
    const {
        className,
        data,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
        withCaret,
    } = props;
    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            gap="8"
            max
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            <HStack justify="center" max>
                <Avatar src={data?.avatar} alt="avatar" />
            </HStack>
            {withCaret ? (
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
                    <InputDeprecated
                        label={t('your_name')}
                        value={data?.first}
                        placeholder={t('your_name')}
                        onChange={onChangeFirstname}
                        readonly={readonly}
                        data-testid="ProfileCard.firstname"
                    />
                    <InputDeprecated
                        label={t('your_surname')}
                        value={data?.lastname}
                        placeholder={t('your_surname')}
                        onChange={onChangeLastname}
                        readonly={readonly}
                        data-testid="ProfileCard.lastname"
                    />
                    <InputDeprecated
                        label={t('your_age')}
                        value={data?.age}
                        placeholder={t('your_age')}
                        onChange={onChangeAge}
                        readonly={readonly}
                        onlyNumbers
                    />
                    <InputDeprecated
                        label={t('your_city')}
                        value={data?.city}
                        placeholder={t('your_city')}
                        onChange={onChangeCity}
                        readonly={readonly}
                    />
                    <InputDeprecated
                        label={t('your_username')}
                        value={data?.username}
                        placeholder={t('your_username')}
                        onChange={onChangeUsername}
                        readonly={readonly}
                    />
                    <InputDeprecated
                        label={t('your_avatar')}
                        value={data?.avatar}
                        placeholder={t('your_avatar')}
                        onChange={onChangeAvatar}
                        readonly={readonly}
                    />
                    <CurrencySelect
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readonly={readonly}
                    />
                    <CountrySelect
                        value={data?.country}
                        onChange={onChangeCountry}
                        readonly={readonly}
                    />
                </>
            )}
        </VStack>
    );
};
