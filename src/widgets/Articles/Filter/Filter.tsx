/* eslint-disable no-unused-vars */
import { useTranslation } from 'react-i18next';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { SortOrder } from '@/shared/lib/types';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';

import styles from './Filter.module.scss';

const sortOrder: { order: SortOrder; label: string }[] = [
    {
        order: 'asc',
        label: '↓',
    },
    {
        order: 'desc',
        label: '↑',
    },
];

interface FilterProps {
    order: SortOrder | undefined;
    onChangeOrder: (newOrder: SortOrder) => () => void;
    onChangeType: (value: string) => void;
    search: string;
    onChangeSearch: (newSearch: string) => void;
    type: string;
}

export const Filter = ({
    onChangeOrder,
    onChangeType,
    order,
    onChangeSearch,
    search,
    type,
}: FilterProps) => {
    const { t } = useTranslation();

    return (
        <VStack className={styles.container}>
            <Input
                value={search}
                onChange={onChangeSearch}
                placeholder={`${t('Search')}`}
                className={styles.search}
                width={220}
            />

            <div className={styles.sortOrder}>
                {sortOrder.map(({ order: _order, label }) => (
                    <Button
                        key={label}
                        variant={order === _order ? 'primary' : 'secondary'}
                        onClick={onChangeOrder(_order)}
                    >
                        {label}
                    </Button>
                ))}
            </div>

            <div>
                <ArticleTypeTabs value={type} onChangeType={onChangeType} />
            </div>
        </VStack>
    );
};
