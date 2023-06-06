/* eslint-disable i18next/no-literal-string */
import { selectUserAuthData } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { useModal } from 'shared/lib/hooks/useModal';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { HStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/NotificationButton';
import { AvatarDropdown } from 'features/AvatarDropdown';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
    portalProps?: {
        portalElement: 'modal' | 'root';
    };
}

export const Navbar = memo(({ className, portalProps }: NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(selectUserAuthData);
    const { isModalOpen, openModal, closeModal } = useModal();

    if (authData) {
        return (
            <div className={classNames(styles.container, {}, [className])}>
                <span className={styles.title}>{`${t('Site name')}`}</span>
                <HStack className={styles.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </div>
        );
    }

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <span className={styles.title}>{`${t('Site name')}`}</span>
            <Button onClick={openModal} theme={ButtonTheme.TEXT}>
                {`${t('Log in')}`}
            </Button>
            <LoginModal
                isOpen={isModalOpen}
                onClose={closeModal}
                {...portalProps}
            />
        </div>
    );
});
