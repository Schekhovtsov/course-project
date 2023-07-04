import { memo, useCallback } from 'react';
import { saveJsonSettings } from '@/entities/User/model/services/saveJsonSettings';
import ChangeThemeIcon from '@/shared/assets/icons/changeThemeIcon.svg';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';

import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        // eslint-disable-next-line no-unused-vars
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <ChangeThemeIcon
            className={classNames(styles.container, {}, [className])}
            width={32}
            height={32}
            onClick={onToggleHandler}
        />
    );
});
