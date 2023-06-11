import { useState, useMemo, ReactNode } from 'react';
import { LS_THEME_KEY } from '@/shared/constants/localStorage';
import { ThemeContext } from '../lib/ThemeContext';
import { Theme } from '../consts/consts';

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
