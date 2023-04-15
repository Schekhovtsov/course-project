import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { ToggleSidebar } from 'widgets/ToggleSidebar';
import { useSelector } from 'react-redux';
import { SidebarItem } from '../SidebarItem';
import { selectSidebarItems } from '../../model/selector/selectSidebarItems';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [isCollapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(selectSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    isCollapsed={isCollapsed}
                    key={item.path}
                />
            )),
        [isCollapsed, sidebarItemsList]
    );

    return (
        <div
            className={classNames(
                styles.container,
                { [styles.collapsed]: isCollapsed },
                [className]
            )}
            data-testid="sidebar"
        >
            <div className={styles.links}>{itemsList}</div>

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
