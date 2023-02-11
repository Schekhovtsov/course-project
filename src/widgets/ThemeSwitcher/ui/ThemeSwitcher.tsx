import { useTheme } from 'app/providers/ThemeProvider';
import ChangeThemeIcon from 'shared/assets/icons/changeThemeIcon.svg';
import { classNames } from 'shared/lib/classNames';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { toggleTheme } = useTheme();

    return (
        <ChangeThemeIcon
            className={classNames(styles.container, {}, [className])}
            width={32}
            height={32}
            onClick={toggleTheme}
        />
    );
}
