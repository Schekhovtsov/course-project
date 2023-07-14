import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';

import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
    const { t } = useTranslation();
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack max className={className}>
                <Text title={`${t('Notifications')}`} />
                {new Array(2).fill(true).map(() => (
                    <Skeleton height={100} width={400} />
                ))}
            </VStack>
        );
    }

    return (
        <VStack max className={className}>
            <Text title={`${t('Notifications')}`} />
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
