import { memo } from 'react';

import { NotificationType } from '../../model/types/notification';

import styles from './NotificationItem.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

interface NotificationItemProps {
    className?: string;
    item: NotificationType;
}

export const NotificationItem = memo(
    ({ className, item }: NotificationItemProps) => {
        const content = (
            <Card className={classNames(styles.container, {}, [className])}>
                <Text
                    titleSize="small"
                    title={item.title}
                    text={item.description}
                />
            </Card>
        );

        if (item.href) {
            <a
                className={styles.link}
                href={item.href}
                target="_blank"
                rel="noreferrer"
            >
                {content}
            </a>;
        }

        return content;
    }
);
