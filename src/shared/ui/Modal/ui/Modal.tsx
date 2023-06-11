import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { ModsType } from '@/shared/lib/classNames/classNames';
import { Portal } from '@/shared/ui/Portal';
import { Overlay } from '@/shared/ui/Overlay';
import { useUlbiModal } from '@/shared/lib/hooks/useUlbiModal';
import styles from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    children: ReactNode;
    width?: number;
    portalElement?: 'modal' | 'root';
    lazy?: boolean;
}

const ANIMATION_DELAY = 100;

export const Modal = ({
    isOpen,
    onClose,
    children,
    width = 500,
    className,
    portalElement = 'modal',
    lazy,
}: ModalProps) => {
    const { close, isClosing, isMounted } = useUlbiModal({
        animationDelay: ANIMATION_DELAY,
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
        <Portal element={document.getElementById(portalElement)}>
            <div className={classNames(styles.container, mods, [className])}>
                <Overlay onClick={close} />
                <div
                    className={classNames(styles.content, mods, [])}
                    style={{ width }}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
