import ArrowRightIcon from 'shared/assets/icons/arrows/right.svg';
import { classNames } from 'shared/lib/classNames';
import styles from './ToggleSidebar.module.scss';

interface ToggleSidebarProps {
    isCollapsed: boolean;
    toggleSidebar: () => void;
    className?: string;
}

export function ToggleSidebar({
    isCollapsed,
    toggleSidebar,
    className,
}: ToggleSidebarProps) {
    return (
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
    );
}
