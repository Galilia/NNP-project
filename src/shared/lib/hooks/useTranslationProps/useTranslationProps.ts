import { useTranslation } from 'react-i18next';

export function useTranslationProps(translateValue: string) {
    const { t } = useTranslation();

    return t(translateValue) as string | undefined;
}
