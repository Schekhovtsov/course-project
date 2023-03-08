import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { ToggleSidebar } from 'widgets/ToggleSidebar';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
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
                {SidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        isCollapsed={isCollapsed}
                        key={item.path}
                    />
                ))}
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
});
