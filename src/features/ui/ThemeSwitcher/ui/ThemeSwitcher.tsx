import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { saveJsonSettings } from '@/entities/User/model/services/saveJsonSettings';
import ChangeThemeIcon from '@/shared/assets/icons/changeThemeIcon.svg';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Icon } from '@/shared/ui/Icon';

import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);

    const onToggleHandler = useCallback(() => {
        // eslint-disable-next-line no-unused-vars
        setLoading(true);
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme })).then(() => {
                setLoading(false);
            });
        });
    }, [dispatch, toggleTheme]);

    return (
        <Icon
            Svg={ChangeThemeIcon}
            title={`${t('Change theme')}`}
            className={classNames(styles.container, {}, [className])}
            width={32}
            height={32}
            clickable
            onClick={onToggleHandler}
            disabled={loading}
        />
    );
});
