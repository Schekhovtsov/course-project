import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

export type useThemeType = {
    theme: Theme;
    toggleTheme: () => void;
};

export const useTheme = (): useThemeType => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        document.body.className = newTheme;
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    useEffect(() => {
        document.body.className =
            (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ??
            Theme.LIGHT;
    }, []);

    return { theme: theme || Theme.LIGHT, toggleTheme };
};
