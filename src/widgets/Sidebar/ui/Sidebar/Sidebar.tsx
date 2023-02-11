import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { ToggleSidebar } from 'widgets/ToggleSidebar';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
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
        >
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
};
