import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal';
import { LoginFormAsync } from '../../index';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    const navigate = useNavigate();

    const onCloseHandler = () => {
        onClose();
    };

    const onSuccessHandler = () => {
        onClose();
        navigate('profile');
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onCloseHandler}
            width={300}
            className={classNames(styles.container, {}, [className])}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onSuccessHandler} />
            </Suspense>
        </Modal>
    );
};
