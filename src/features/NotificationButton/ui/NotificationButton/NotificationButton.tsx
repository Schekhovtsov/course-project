import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { Icon } from 'shared/ui/Icon';
import { NotificationList } from 'entities/Notification';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from 'shared/ui/Drawer';
import { useCallback, useState } from 'react';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
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
                <Popover direction="bottom left" trigger={trigger}>
                    <NotificationList className={styles.container} />
                </Popover>
            </BrowserView>

            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={open} onClose={toggleDrawer}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </>
    );
};
