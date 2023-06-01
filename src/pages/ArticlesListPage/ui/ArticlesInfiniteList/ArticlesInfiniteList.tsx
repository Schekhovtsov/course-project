import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useSearchParams } from 'react-router-dom';
// import { rtkApi } from 'shared/api/rtkApi';
import { getArticles } from '../../model/slice/articlesListPageSlice';
import {
    selectArticlesListPageIsLoading,
    selectArticlesListPageView,
} from '../../model/selector/articlesListPageSelectors';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage';

// const articlesApi = rtkApi.injectEndpoints({
//     endpoints: (build) => ({
//         getArticlesList: build.query({
//             query: () => ({
//                 url: '/articles',
//                 params: {
//                     _limit: 3,
//                     _page: 1,
//                 },
//             }),
//         }),
//     }),
// });

// const useArticlesList = articlesApi.useGetArticlesListQuery;

export const ArticlesInfiniteList = () => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(selectArticlesListPageIsLoading);
    const view = useSelector(selectArticlesListPageView);

    // const { isLoading: _isLoading, data: _articles } = useArticlesList({
    //     _limit: 3,
    //     _page: 1,
    // });

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