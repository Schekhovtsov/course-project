import { memo } from 'react';
import { StickyContentLayout } from '@/shared/layouts';
import {
    ReducersList,
    useDynamicReducerLoader,
} from '@/shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';

import { articlesListPageReducer } from '../../model/slice/articlesListPageSlice';
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList';
import { ArticlesListPageFilters } from '../ArticlesListPageFilters/ArticlesListPageFilters';
import { ArticleViewChanger } from '../ArticleViewChanger';

const reducers: ReducersList = {
    articlesListPage: articlesListPageReducer,
};

const ArticlesListPage = () => {
    useDynamicReducerLoader(reducers);

    return (
        <StickyContentLayout
            left={<ArticleViewChanger />}
            content={<ArticlesInfiniteList />}
            right={<ArticlesListPageFilters />}
        />
    );
};

export default memo(ArticlesListPage);
