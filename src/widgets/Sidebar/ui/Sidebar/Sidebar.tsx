import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { ToggleSidebar } from '@/features/ToggleSidebar';
import { VStack } from '@/shared/ui/Stack';
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
        <aside
            className={classNames(
                styles.container,
                { [styles.collapsed]: isCollapsed },
                [className]
            )}
            data-testid="sidebar"
        >
            <VStack role="navigation" className={styles.links}>
                {itemsList}
            </VStack>

            <VStack gap={20} className={styles.switchers}>
                <ToggleSidebar
                    isCollapsed={isCollapsed}
                    toggleSidebar={onToggle}
                />
                <LanguageSwitcher />
                <ThemeSwitcher />
            </VStack>
        </aside>
    );
});
