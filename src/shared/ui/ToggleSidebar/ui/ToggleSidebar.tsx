import styles from './ToggleSidebar.module.scss';
import ArrowRightIcon from 'shared/assets/icons/arrows/right.svg';
import { classNames } from 'shared/lib/classNames';

interface ToggleSidebarProps {
    isCollapsed: boolean;
    toggleSidebar: () => void;
    className?: string;
}

export const ToggleSidebar = ({
    isCollapsed,
    toggleSidebar,
    className,
}: ToggleSidebarProps) => {
    return (
        <div className={styles.container} title="Toggle sidebar">
            <ArrowRightIcon
                className={classNames(
                    styles.icon,
                    {
                        [styles.reverse]: isCollapsed,
                    },
                    [className]
                )}
                width={48}
                height={48}
                onClick={toggleSidebar}
            />
        </div>
    );
};
