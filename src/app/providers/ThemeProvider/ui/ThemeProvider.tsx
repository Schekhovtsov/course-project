import { ReactNode, useEffect, useMemo, useState } from 'react';
import { LS_THEME_KEY } from '@/shared/constants/localStorage';
import { Theme } from '@/shared/constants/theme';
import { ThemeContext } from '@/shared/contexts/ThemeContext';

interface ThemeProviderProps {
    initialTheme: Theme;
    children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LS_THEME_KEY) as Theme;

export const ThemeProvider = ({
    initialTheme,
    children,
}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(
        initialTheme || fallbackTheme || Theme.LIGHT
    );
    const [isThemeInited, setIsThemeInited] = useState(false);

    useEffect(() => {
        if (!isThemeInited) {
            setTheme(initialTheme);
            setIsThemeInited(true);
        }
    }, [isThemeInited, initialTheme]);

    useEffect(() => {
        localStorage.setItem(LS_THEME_KEY, theme);
        document.body.className = theme;
    }, [theme]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
