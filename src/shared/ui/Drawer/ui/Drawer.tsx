import { ReactNode, memo } from 'react';
import { ModsType, classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal';
import { Overlay } from 'shared/ui/Overlay';
import { useUlbiModal } from 'shared/lib/hooks/useUlbiModal/ui/useUlbiModal';
import styles from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer = memo(
    ({ className, children, isOpen, onClose, lazy }: DrawerProps) => {
        const { close, isClosing, isMounted } = useUlbiModal({
            animationDelay: 300,
            isOpen,
            onClose,
        });

        const mods: ModsType = {
            [styles.opened]: isOpen,
            [styles.isClosing]: isClosing,
        };

        if (lazy && !isMounted) {
            return null;
        }

        return (
            <Portal>
                <div
                    className={classNames(styles.container, mods, [className])}
                >
                    <Overlay onClick={close} />
                    <div className={styles.content}>{children}</div>
                </div>
            </Portal>
        );
    }
);
