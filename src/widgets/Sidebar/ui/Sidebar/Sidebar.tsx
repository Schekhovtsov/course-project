import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { ToggleSidebar } from 'widgets/ToggleSidebar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const { t } = useTranslation();
    const [isCollapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(
                styles.container,
                { [styles.collapsed]: isCollapsed },
                [className]
            )}
            data-testid="sidebar"
        >
            <div className={styles.links}>
                <AppLink to={RoutePath.main} className={styles.item}>
                    <HomeIcon className={styles.icon} />
                    <span className={styles.link}>{t('Home')}</span>
                </AppLink>

                <AppLink to={RoutePath.about} className={styles.item}>
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}>{t('About')}</span>
                </AppLink>
            </div>

            <div className={styles.switchers}>
                <ToggleSidebar
                    isCollapsed={isCollapsed}
                    toggleSidebar={onToggle}
                />
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
}
