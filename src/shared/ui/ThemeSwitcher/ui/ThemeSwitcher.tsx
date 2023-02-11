import { useTheme } from 'app/providers/ThemeProvider';
import styles from './ThemeSwitcher.module.scss';
import ChangeThemeIcon from 'shared/assets/icons/changeThemeIcon.svg';
import { Button } from 'shared/ui/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <div className={styles.container}>
            <ChangeThemeIcon
                className={styles.icon}
                width={32}
                height={32}
                onClick={toggleTheme}
            />
            <Button onClick={toggleTheme}>Change theme</Button>
        </div>
    );
};
