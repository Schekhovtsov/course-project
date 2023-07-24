import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { MainLayout } from '../MainLayout';

import styles from './AppLoaderLayout.module.scss';

export const AppLoaderLayout = () => (
    <MainLayout
        header={
            <HStack className={styles.header}>
                <Skeleton width={50} height={50} borderRadius="50%" />
            </HStack>
        }
        content={
            <VStack>
                <Skeleton width="70%" height={32} borderRadius="12px" />
                <Skeleton width="40%" height={20} borderRadius="12px" />
                <Skeleton width="50%" height={20} borderRadius="12px" />
                <Skeleton width="30%" height={32} borderRadius="12px" />
            </VStack>
        }
        sidebar={<Skeleton width={250} height="100%" borderRadius="32px" />}
    />
);
