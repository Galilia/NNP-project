import { useTranslation } from 'react-i18next';

/**
 * Custom hook to simplify translation of values.
 *
 * @param translateValue - The key string to be translated.
 *
 * @returns - The translated string corresponding to the given key, or undefined if the translation is not found.
 */
export function useTranslationProps(translateValue: string) {
    const { t } = useTranslation();

    return t(translateValue) as string | undefined;
}
