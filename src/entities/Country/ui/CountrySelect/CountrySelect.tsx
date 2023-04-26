import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Country } from '../../model/types/country';
import { ListBox } from '@/shared/ui/Popups';
import { classNames } from '@/shared/lib/classNames/classNames';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const options = useMemo(() => Object.entries(Country).map((val) => ({ value: val[0], content: val[1] })), []);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={t('pick_country')}
            label={t('pick_country')}
            className={classNames('', {}, [className])}
            readonly={readonly}
            direction="top right"
        />
    );
});
