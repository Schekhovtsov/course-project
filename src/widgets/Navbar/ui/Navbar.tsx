/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/auth/AuthByUsername';
import { AvatarDropdown } from '@/features/profile/AvatarDropdown';
import { NotificationButton } from '@/features/ui/NotificationButton';
import { classNames } from '@/shared/lib/classNames';
import { ToggledFeatures } from '@/shared/lib/features/ToggledFeatures';
import { useModal } from '@/shared/lib/hooks/useModal';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';

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
            <ToggledFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        className={classNames(styles.containerRedesigned, {}, [
                            className,
                        ])}
                    >
                        <HStack className={styles.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </div>
                }
                off={
                    <div
                        className={classNames(styles.container, {}, [
                            className,
                        ])}
                    >
                        <span className={styles.title}>
                            {`${t('Site name')}`}
                        </span>
                        <HStack className={styles.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </div>
                }
            />
        );
    }

    return (
        <ToggledFeatures
            feature="isAppRedesigned"
            on={
                <div className={classNames(styles.container, {}, [className])}>
                    <Button onClick={openModal} variant="text">
                        {`${t('Log in')}`}
                    </Button>
                    <LoginModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        {...portalProps}
                    />
                </div>
            }
            off={
                <div className={classNames(styles.container, {}, [className])}>
                    <span className={styles.title}>{`${t('Site name')}`}</span>
                    <Button onClick={openModal} variant="text">
                        {`${t('Log in')}`}
                    </Button>
                    <LoginModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        {...portalProps}
                    />
                </div>
            }
        />
    );
});
