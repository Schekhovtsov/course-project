import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { ToggleSidebar } from 'features/ToggleSidebar';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';
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
            <VStack className={styles.links}>{itemsList}</VStack>

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
