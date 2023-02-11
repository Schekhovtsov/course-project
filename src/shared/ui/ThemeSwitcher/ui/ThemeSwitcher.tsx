import { useTheme } from 'app/providers/ThemeProvider';
import styles from './ThemeSwitcher.module.scss';
import ChangeThemeIcon from 'shared/assets/icons/changeThemeIcon.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <div className={styles.container} title="Change theme">
            <ChangeThemeIcon
                className={styles.icon}
                width={48}
                height={48}
                onClick={toggleTheme}
            />
        </div>
    );
};
