import { useContext, useEffect } from 'react';
// eslint-disable-next-line feature-sliced-design/layers-hierarchy
import { useJsonSettings } from '@/entities/User';

import { Theme } from '../../../constants/theme';
import { ThemeContext } from '../../../contexts/ThemeContext';

export type useThemeType = {
    theme: Theme;
    // eslint-disable-next-line no-unused-vars
    toggleTheme: (saveAction: (theme: Theme) => void) => void;
};

export const useTheme = (): useThemeType => {
    const { theme: storedTheme = Theme.LIGHT } = useJsonSettings();
    const { theme, setTheme } = useContext(ThemeContext);

    // eslint-disable-next-line no-unused-vars
    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        document.body.className = newTheme;
        setTheme?.(newTheme);

        saveAction?.(newTheme);
    };

    useEffect(() => {
        document.body.className = storedTheme;
    }, [storedTheme]);

    return { theme: theme || Theme.LIGHT, toggleTheme };
};
