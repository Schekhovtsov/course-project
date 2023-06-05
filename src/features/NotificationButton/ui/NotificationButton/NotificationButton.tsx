import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { Icon } from 'shared/ui/Icon';
import { NotificationList } from 'entities/Notification';
import { useTranslation } from 'react-i18next';
import styles from './NotificationButton.module.scss';

export const NotificationButton = () => {
    const { t } = useTranslation();

    return (
        <Popover
            direction="bottom left"
            trigger={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <Button
                    theme={ButtonTheme.TEXT}
                    title={`${t('Notifications')}`}
                >
                    <Icon Svg={NotificationIcon} />
                </Button>
            }
        >
            <NotificationList className={styles.container} />
        </Popover>
    );
};
