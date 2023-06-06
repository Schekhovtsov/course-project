import { ReactNode, memo } from 'react';
import { ModsType, classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal';
import { Overlay } from 'shared/ui/Overlay';
import styles from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo(
    ({ className, children, isOpen, onClose }: DrawerProps) => {
        const mods: ModsType = {
            [styles.opened]: isOpen,
        };

        return (
            <Portal>
                <div
                    className={classNames(styles.container, mods, [className])}
                >
                    <Overlay onClick={onClose} />
                    <div className={styles.content}>{children}</div>
                </div>
            </Portal>
        );
    }
);
