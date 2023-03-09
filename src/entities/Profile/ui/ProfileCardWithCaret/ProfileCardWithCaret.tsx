import { useTranslation } from 'react-i18next';
import { InputWithCaret } from 'shared/ui/InputWithCaret/InputWithCaret';
import cls from './ProfileCardWithCaret.module.scss';

interface ProfileCardWithInputProps {
    className?: string;
    first?: string;
    lastname?: string;
    age?: string | number;
    city?: string;
    onChangeFirstname: (value?: string) => void;
    onChangeLastname: (value?: string) => void;
    onChangeAge: (value?: string) => void;
    onChangeCity: (value?: string) => void;
    readonly?: boolean;
}

export const ProfileCardWithCaret = (props: ProfileCardWithInputProps) => {
    const {
        first,
        lastname,
        age,
        city,
        onChangeFirstname,
        onChangeLastname,
        readonly,
        className,
        onChangeAge,
        onChangeCity,
    } = props;
    const { t } = useTranslation();

    return (
        <>
            <InputWithCaret
                value={first}
                placeholder={t('your_name')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
            />
            <InputWithCaret
                value={lastname}
                placeholder={t('your_surname')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
            />
            <InputWithCaret
                value={age}
                placeholder={t('your_age')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
                onlyNumbers
            />
            <InputWithCaret
                value={city}
                placeholder={t('your_city')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
        </>
    );
};
