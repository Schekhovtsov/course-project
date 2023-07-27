import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowRightIcon from '@/shared/assets/icons/arrows/right.svg';
import { classNames } from '@/shared/lib/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';

import styles from './ToggleSidebar.module.scss';

interface ToggleSidebarProps {
    isCollapsed: boolean;
    toggleSidebar: () => void;
    className?: string;
}

export const ToggleSidebar = memo(
    ({ isCollapsed, toggleSidebar, className }: ToggleSidebarProps) => {
        const { t } = useTranslation();

        return (
            <Icon
                Svg={ArrowRightIcon}
                onKeyDown={toggleSidebar}
                clickable
                onClick={toggleSidebar}
                title={`${t('Toggle sidebar')}`}
                data-testid="toggle-sidebar"
                className={classNames(
                    styles.icon,
                    {
                        [styles.reverse]: isCollapsed,
                    },
                    [className]
                )}
                width={32}
                height={32}
            />
        );
    }
);
