import {
    MouseEvent,
    ReactNode,
    useRef,
    useState,
    useEffect,
    useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal';
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
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }

        return () => {
            setIsMounted(false);
        };
    }, [isOpen]);

    const closeModalHandler = useCallback(() => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            onClose?.();
            setIsClosing(false);
        }, ANIMATION_DELAY);
    }, [onClose]);

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    };

    const onKeyDownHandler = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModalHandler();
            }
        },
        [closeModalHandler]
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDownHandler);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDownHandler);
        };
    }, [isOpen, onKeyDownHandler]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal element={document.getElementById(portalElement)}>
            <div className={classNames(styles.container, mods, [className])}>
                <div
                    className={styles.overlay}
                    onClick={closeModalHandler}
                    role="banner"
                    onKeyDown={() => {}}
                >
                    <div
                        className={classNames(styles.content, mods, [])}
                        style={{ width }}
                        onClick={onContentClick}
                        role="alertdialog"
                        onKeyDown={() => {}}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
