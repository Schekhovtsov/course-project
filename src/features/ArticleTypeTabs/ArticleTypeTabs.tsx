import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Tabs } from '@/shared/ui/Tabs';
import { TabItem } from '@/shared/ui/Tabs/Tabs';

interface ArticleTypeTabsProps {
    value: string;
    // eslint-disable-next-line no-unused-vars
    onChangeType: (value: string) => void;
}

export const ArticleTypeTabs = ({
    value,
    onChangeType,
}: ArticleTypeTabsProps) => {
    const { t } = useTranslation();

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value);
        },
        [onChangeType]
    );

    const tabs = useMemo<TabItem[]>(
        () => [
            { value: 'All', content: t('All') },
            { value: 'IT', content: t('IT') },
            { value: 'Music', content: t('Music') },
            { value: 'TV', content: t('TV') },
        ],
        [t]
    );

    return <Tabs tabs={tabs} onTabClick={onTabClick} value={value} />;
};
