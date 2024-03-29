import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { ArticleList } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';

import {
    selectArticlesListPageIsLoading,
    selectArticlesListPageView,
} from '../../model/selector/articlesListPageSelectors';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage';
import { getArticles } from '../../model/slice/articlesListPageSlice';

export const ArticlesInfiniteList = () => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(selectArticlesListPageIsLoading);
    const view = useSelector(selectArticlesListPageView);

    const onLoadNextBatch = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <ArticleList
            articles={articles}
            isLoading={isLoading}
            view={view}
            onLoadNextBatch={onLoadNextBatch}
        />
    );
};
