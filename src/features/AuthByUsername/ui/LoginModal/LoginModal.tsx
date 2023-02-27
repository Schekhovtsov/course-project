import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../../index';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    const onCloseHandler = () => {
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onCloseHandler}
            width={300}
            className={classNames(styles.container, {}, [className])}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
