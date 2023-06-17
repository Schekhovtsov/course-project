import { useState, useMemo, ReactNode } from 'react';
import { LS_THEME_KEY } from '@/shared/constants/localStorage';
import { ThemeContext } from '@/shared/contexts/ThemeContext';
import { Theme } from '@/shared/constants/theme';

const storedTheme =
    (localStorage.getItem(LS_THEME_KEY) as Theme) ?? Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

export const ThemeProvider = ({
    initialTheme,
    children,
}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(storedTheme || initialTheme);

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
