import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useModal } from 'shared/lib/hooks/useModal';
import { Button, ButtonTheme } from 'shared/ui/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
    portalProps?: {
        portalElement: 'modal';
    };
}

export const Navbar = memo(({ className, portalProps }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isAuthorized = useSelector(getUserAuthData);
    const { isModalOpen, openModal, closeModal } = useModal();

    const logoutHandler = () => {
        dispatch(userActions.logout());
    };

    if (isAuthorized) {
        return (
            <div className={classNames(styles.container, {}, [className])}>
                <span className={styles.title}>{t('Site name')}</span>
                <Button onClick={logoutHandler} theme={ButtonTheme.TEXT}>
                    {t('Log out')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <span className={styles.title}>{t('Site name')}</span>
            <Button onClick={openModal} theme={ButtonTheme.TEXT}>
                {t('Log in')}
            </Button>
            <LoginModal
                isOpen={isModalOpen}
                onClose={closeModal}
                {...portalProps}
            />
        </div>
    );
});
