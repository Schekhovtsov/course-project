import { memo } from 'react';
import {
    ReducersList,
    useDynamicReducerLoader,
} from 'shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';
import { Page } from 'widgets/Page';
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList';
import { ArticlesListPageFilters } from '../ArticlesListPageFilters/ArticlesListPageFilters';
import styles from './ArticlesListPage.module.scss';
import { articlesListPageReducer } from '../../model/slice/articlesListPageSlice';

const reducers: ReducersList = {
    articlesListPage: articlesListPageReducer,
};

const ArticlesListPage = () => {
    useDynamicReducerLoader(reducers);

    return (
        <Page className={styles.container}>
            <ArticlesListPageFilters />
            <ArticlesInfiniteList />
        </Page>
    );
};

export default memo(ArticlesListPage);
