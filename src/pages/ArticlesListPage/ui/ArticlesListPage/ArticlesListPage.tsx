import { memo } from 'react';
import { StickyContentLayout } from '@/shared/layouts';
import {
    ReducersList,
    useDynamicReducerLoader,
} from '@/shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';
import { Page } from '@/widgets/Page';

import { articlesListPageReducer } from '../../model/slice/articlesListPageSlice';
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList';
import { ArticlesListPageFilters } from '../ArticlesListPageFilters/ArticlesListPageFilters';
import { ArticleViewChanger } from '../ArticleViewChanger';

import styles from './ArticlesListPage.module.scss';

const reducers: ReducersList = {
    articlesListPage: articlesListPageReducer,
};

const ArticlesListPage = () => {
    useDynamicReducerLoader(reducers);

    return (
        <StickyContentLayout
            left={<ArticleViewChanger />}
            content={
                <Page className={styles.container} data-testid="Articles page">
                    <ArticlesInfiniteList />
                </Page>
            }
            right={<ArticlesListPageFilters />}
        />
    );
};

export default memo(ArticlesListPage);
