import { selectUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { SidebarItemType } from '../../model/types/sidebar';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    isCollapsed: boolean;
}

export const SidebarItem = memo(({ item, isCollapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const { Icon, text, path } = item;
    const isAuth = useSelector(selectUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={path}
            className={classNames(styles.item, {
                [styles.collapsed]: isCollapsed,
            })}
        >
            <Icon className={styles.icon} />
            <span className={styles.link}>{`${t(text)}`}</span>
        </AppLink>
    );
});
