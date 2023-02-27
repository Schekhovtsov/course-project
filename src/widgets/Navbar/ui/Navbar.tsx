import { LoginModal } from 'features/AuthByUsername';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { useModal } from 'shared/lib/hooks/useModal';
import { Button, ButtonTheme } from 'shared/ui/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
    portalProps?: {
        portalElement: 'modal';
    };
}

export function Navbar({ className, portalProps }: NavbarProps) {
    const { t } = useTranslation();

    const { isModalOpen, openModal, closeModal } = useModal();

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <span className={styles.title}>{t('Site name')}</span>
            <div className={styles.links}>
                <Button onClick={openModal} theme={ButtonTheme.TEXT}>
                    {t('Log in')}
                </Button>
            </div>
            <LoginModal
                isOpen={isModalOpen}
                onClose={closeModal}
                {...portalProps}
            />
        </div>
    );
}
