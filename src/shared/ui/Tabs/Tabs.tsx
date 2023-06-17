import { ReactNode, memo, useCallback } from 'react';

import styles from './Tabs.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';

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
            <div className={classNames(styles.container, {}, [className])}>
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
            </div>
        );
    }
);
