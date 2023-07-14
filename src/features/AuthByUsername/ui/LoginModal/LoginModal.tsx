import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader/Loader';
import { Modal } from '@/shared/ui/deprecated/Modal';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

import styles from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    const navigate = useNavigate();
    const authData = useSelector(selectUserAuthData);

    const onCloseHandler = () => {
        onClose();
    };

    const onSuccessHandler = () => {
        onClose();
        if (authData?.id) {
            navigate(`profile/${authData.id}`);
        } else {
            navigate('');
        }
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
