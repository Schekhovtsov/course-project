import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import {
    ReducersList,
    useDynamicReducerLoader,
} from 'shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Page } from 'widgets/Page';
import { ArticlesListPageFilters } from '../ArticlesListPageFilters/ArticlesListPageFilters';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage';
import styles from './ArticlesListPage.module.scss';
import {
    articlesListPageReducer,
    getArticles,
} from '../../model/slice/articlesListPageSlice';
import {
    selectArticlesListPageIsLoading,
    selectArticlesListPageView,
} from '../../model/selector/articlesListPageSelectors';

interface ArticlesListPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesListPage: articlesListPageReducer,
};

// eslint-disable-next-line no-unused-vars
const ArticlesListPage = ({ className }: ArticlesListPageProps) => {
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(selectArticlesListPageIsLoading);
    const view = useSelector(selectArticlesListPageView);

    const [searchParams] = useSearchParams();

    const onLoadNextBatch = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    useDynamicReducerLoader(reducers);

    return (
        <Page className={styles.container}>
            <ArticlesListPageFilters />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                view={view}
                onLoadNextBatch={onLoadNextBatch}
            />
        </Page>
    );
};

export default memo(ArticlesListPage);
