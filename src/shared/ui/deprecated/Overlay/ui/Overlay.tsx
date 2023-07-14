import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Overlay = memo(({ className, onClick }: OverlayProps) => (
    <div
        onClick={onClick}
        role="presentation"
        className={classNames(styles.container, {}, [className])}
    />
));
