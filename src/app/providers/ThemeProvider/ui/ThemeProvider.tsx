import React, { ReactNode, useEffect, useMemo, useState } from 'react';

import { useJsonSettingsSelector } from '@/entities/User';
import { Theme } from '@/shared/const/themeConst';

import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const { initialTheme, children } = props;
    const { theme: defaultTheme = Theme.LIGHT } = useJsonSettingsSelector();
    const [isThemeInited, setThemeInited] = useState(false);
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    useEffect(() => {
        if (!isThemeInited) {
            setTheme(defaultTheme);
            setThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    document.body.className = theme;

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
