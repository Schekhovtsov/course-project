import {
    ReactNode,
    useRef,
    useState,
    useEffect,
    useCallback,
    MutableRefObject
} from 'react';
import { classNames } from 'shared/lib/classNames';
import { ModsType } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal';
import { Overlay } from 'shared/ui/Overlay';
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
    const timerRef = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;

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

    const mods: ModsType = {
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
                <Overlay onClick={closeModalHandler} />
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
