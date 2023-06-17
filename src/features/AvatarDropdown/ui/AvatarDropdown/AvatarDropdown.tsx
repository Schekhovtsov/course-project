import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    selectIsUserAdmin,
    selectIsUserModerator,
    selectUserAuthData,
    userActions,
} from '@/entities/User';
import { RoutePath } from '@/shared/constants/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';

export const AvatarDropdown = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const authData = useSelector(selectUserAuthData);

    const isAdmin = useSelector(selectIsUserAdmin);
    const isModerator = useSelector(selectIsUserModerator);
    const isAdminPanelAvailable = isAdmin || isModerator;

    const logoutHandler = () => {
        dispatch(userActions.logout());
    };

    if (!authData) {
        return null;
    }

    return (
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
    );
};
