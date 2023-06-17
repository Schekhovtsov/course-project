import { memo } from 'react';

import styles from './Overlay.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

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
