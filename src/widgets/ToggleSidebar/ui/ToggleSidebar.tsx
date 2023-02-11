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
        <div className={styles.container} title="Toggle sidebar">
            <ArrowRightIcon
                className={classNames(
                    styles.icon,
                    {
                        [styles.reverse]: isCollapsed,
                    },
                    [className],
                )}
                width={32}
                height={32}
                onClick={toggleSidebar}
            />
        </div>
    );
}
