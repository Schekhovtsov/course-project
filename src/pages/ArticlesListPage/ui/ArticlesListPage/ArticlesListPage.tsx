import { memo } from 'react';
import {
    ReducersList,
    useDynamicReducerLoader,
} from '@/shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';
import { Page } from '@/widgets/Page';

import { articlesListPageReducer } from '../../model/slice/articlesListPageSlice';
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList';
import { ArticlesListPageFilters } from '../ArticlesListPageFilters/ArticlesListPageFilters';

import styles from './ArticlesListPage.module.scss';

const reducers: ReducersList = {
    articlesListPage: articlesListPageReducer,
};

const ArticlesListPage = () => {
    useDynamicReducerLoader(reducers);

    return (
        <Page className={styles.container} data-testid="Articles page">
            <ArticlesListPageFilters />
            <ArticlesInfiniteList />
        </Page>
    );
};

export default memo(ArticlesListPage);
