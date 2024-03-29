import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay = memo(({ className, onClick }: OverlayProps) => (
    <div
        onClick={onClick}
        role="presentation"
        className={classNames(styles.container, {}, [className])}
    />
));
