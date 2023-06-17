import { useContext, useEffect } from 'react';

import { LS_THEME_KEY } from '../../../constants/localStorage';
import { Theme } from '../../../constants/theme';
import { ThemeContext } from '../../../contexts/ThemeContext';

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
        localStorage.setItem(LS_THEME_KEY, newTheme);
    };

    useEffect(() => {
        document.body.className =
            (localStorage.getItem(LS_THEME_KEY) as Theme) ?? Theme.LIGHT;
    }, []);

    return { theme: theme || Theme.LIGHT, toggleTheme };
};
