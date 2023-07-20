import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { Card } from '../Card';

import styles from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    // eslint-disable-next-line no-unused-vars
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo(
    ({ className, tabs, value, onTabClick }: TabsProps) => {
        const onClickHandler = useCallback(
            (tab: TabItem) => () => {
                onTabClick(tab);
            },
            [onTabClick]
        );

        return (
            <VStack className={classNames(styles.container, {}, [className])}>
                {tabs.map((tab) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Card
                        key={tab.value}
                        className={`${styles.tab} ${
                            tab.value === value ? styles.active : ''
                        }`}
                        onClick={onClickHandler(tab)}
                    >
                        {tab.content}
                    </Card>
                ))}
            </VStack>
        );
    }
);
