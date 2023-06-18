import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';

import styles from './NotificationButton.module.scss';

export const NotificationButton = () => {
    const { t } = useTranslation();

    const [open, setIsOpen] = useState(false);

    const toggleDrawer = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const trigger = (
        <Button
            onClick={toggleDrawer}
            theme={ButtonTheme.TEXT}
            title={`${t('Notifications')}`}
        >
            <Icon Svg={NotificationIcon} />
        </Button>
    );

    return (
        <>
            <BrowserView>
                <Popover
                    direction="bottom left"
                    trigger={trigger}
                    className={styles.popover}
                >
                    <NotificationList className={styles.container} />
                </Popover>
            </BrowserView>

            <MobileView>
                {trigger}
                <Drawer isOpen={open} onClose={toggleDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    );
};
