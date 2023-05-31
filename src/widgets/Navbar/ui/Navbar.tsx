import {
    selectIsUserModerator,
    selectIsUserAdmin,
    selectUserAuthData,
    userActions,
} from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useModal } from 'shared/lib/hooks/useModal';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Dropdown } from 'shared/ui/Dropdown';
import { Avatar } from 'shared/ui/Avatar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
    portalProps?: {
        portalElement: 'modal' | 'root';
    };
}

export const Navbar = memo(({ className, portalProps }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useSelector(selectUserAuthData);
    const { isModalOpen, openModal, closeModal } = useModal();

    const isAdmin = useSelector(selectIsUserAdmin);
    const isModerator = useSelector(selectIsUserModerator);
    const isAdminPanelAvailable = isAdmin || isModerator;

    const logoutHandler = () => {
        dispatch(userActions.logout());
    };

    if (authData) {
        return (
            <div className={classNames(styles.container, {}, [className])}>
                <span className={styles.title}>{t('Site name')}</span>
                <Dropdown
                    items={[
                        {
                            content: t('Profile'),
                            href: RoutePath.profile + authData.id,
                        },
                        ...(isAdminPanelAvailable
                            ? [
                                  {
                                      content: t('Admin panel'),
                                      href: RoutePath.admin_panel,
                                  },
                              ]
                            : []),
                        {
                            content: t('Log out'),
                            onClick: logoutHandler,
                        },
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar ?? ''} />}
                    direction="bottom left"
                />
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
