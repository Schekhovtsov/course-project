import { Filter } from '@/widgets/Articles/Filter/Filter';

import { useArticleFilters } from '../../model/lib/hooks/useArticleFilters';

export const ArticlesListPageFilters = () => {
    const { order, search, type, onChangeOrder, onChangeSearch, onChangeType } =
        useArticleFilters();

    return (
        <Filter
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeType}
            order={order}
            search={search}
            type={type}
        />
    );
};
