import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Popover } from '@/shared/ui/deprecated/Popups';
import { Button } from '@/shared/ui/redesigned/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';

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
            variant="text"
            title={`${t('Notifications')}`}
        >
            <Icon Svg={NotificationIcon} width={30} height={30} />
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
