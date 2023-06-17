import { memo } from 'react';

import styles from './ThemeSwitcher.module.scss';

import ChangeThemeIcon from '@/shared/assets/icons/changeThemeIcon.svg';
import { classNames } from '@/shared/lib/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <ChangeThemeIcon
            className={classNames(styles.container, {}, [className])}
            width={32}
            height={32}
            onClick={toggleTheme}
        />
    );
});
