import { useTranslation } from 'react-i18next';
import { ProfileCardWithCaret } from '../ProfileCardWithCaret/ProfileCardWithCaret';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';

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
            <HStack justify="center" max className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    text={t('Please, update page')}
                    title={t('Error happened')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar src={data?.avatar} alt="avatar" />
                </HStack>
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
                        onChange={onChangeFirstname}
                        readonly={readonly}
                        data-testid="ProfileCard.firstname"
                    />
                    <Input
                        label={t('your_surname')}
                        value={data?.lastname}
                        placeholder={t('your_surname')}
                        onChange={onChangeLastname}
                        readonly={readonly}
                        data-testid="ProfileCard.lastname"
                    />
                    <Input
                        label={t('your_age')}
                        value={data?.age}
                        placeholder={t('your_age')}
                        onChange={onChangeAge}
                        readonly={readonly}
                        onlyNumbers
                    />
                    <Input
                        label={t('your_city')}
                        value={data?.city}
                        placeholder={t('your_city')}
                        onChange={onChangeCity}
                        readonly={readonly}
                    />
                    <Input
                        label={t('your_username')}
                        value={data?.username}
                        placeholder={t('your_username')}
                        onChange={onChangeUsername}
                        readonly={readonly}
                    />
                    <Input
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
