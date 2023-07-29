import { ReactNode, useEffect, useMemo, useState } from 'react';
import { useJsonSettings } from '@/entities/User';
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
    const { theme: storedTheme } = useJsonSettings();
    const [theme, setTheme] = useState<Theme>(
        storedTheme || fallbackTheme || initialTheme
    );
    const [isThemeInited, setIsThemeInited] = useState(false);

    useEffect(() => {
        if (!isThemeInited && storedTheme) {
            setTheme(initialTheme);
            localStorage.setItem(LS_THEME_KEY, initialTheme);
            setIsThemeInited(true);
        }
    }, [isThemeInited, initialTheme, storedTheme]);

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
