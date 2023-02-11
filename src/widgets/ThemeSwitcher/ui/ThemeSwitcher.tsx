import { useTheme } from 'app/providers/ThemeProvider';
import styles from './ThemeSwitcher.module.scss';
import ChangeThemeIcon from 'shared/assets/icons/changeThemeIcon.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <ChangeThemeIcon
            className={styles.container}
            width={32}
            height={32}
            onClick={toggleTheme}
        />
    );
};
