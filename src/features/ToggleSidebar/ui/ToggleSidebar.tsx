import { memo } from 'react';

import styles from './ToggleSidebar.module.scss';

import ArrowRightIcon from '@/shared/assets/icons/arrows/right.svg';
import { classNames } from '@/shared/lib/classNames';

interface ToggleSidebarProps {
    isCollapsed: boolean;
    toggleSidebar: () => void;
    className?: string;
}

export const ToggleSidebar = memo(
    ({ isCollapsed, toggleSidebar, className }: ToggleSidebarProps) => (
        <div
            tabIndex={0}
            role="button"
            onKeyDown={toggleSidebar}
            onClick={toggleSidebar}
            title="Toggle sidebar"
            data-testid="toggle-sidebar"
            className={classNames(
                styles.icon,
                {
                    [styles.reverse]: isCollapsed,
                },
                [className]
            )}
        >
            <ArrowRightIcon width={32} height={32} />
        </div>
    )
);
