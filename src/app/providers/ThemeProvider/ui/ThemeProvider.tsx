import { ReactNode, useEffect, useMemo, useState } from 'react';
import { useJsonSettings } from '@/entities/User';
import { Theme } from '@/shared/constants/theme';
import { ThemeContext } from '@/shared/contexts/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

export const ThemeProvider = ({
    initialTheme,
    children,
}: ThemeProviderProps) => {
    const { theme: storedTheme = Theme.LIGHT } = useJsonSettings();
    const [theme, setTheme] = useState<Theme>(storedTheme || initialTheme);
    const [isThemeInited, setIsThemeInited] = useState(false);

    useEffect(() => {
        if (!isThemeInited && storedTheme) {
            setTheme(storedTheme);
            setIsThemeInited(true);
        }
    }, [isThemeInited, storedTheme]);

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
