import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ArticleViewType } from '@/entities/Article/model/types/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { SortOrder } from '@/shared/lib/types';

import {
    selectArticlesListPageSearch,
    selectArticlesListPageSortOrder,
    selectArticlesListPageType,
    selectArticlesListPageView,
} from '../../selector/articlesListPageSelectors';
import { fetchArticlesList } from '../../services/fetchArticlesList';
import { articlesListPageActions } from '../../slice/articlesListPageSlice';

export const useArticleFilters = () => {
    const dispatch = useAppDispatch();

    const order = useSelector(selectArticlesListPageSortOrder);
    const search = useSelector(selectArticlesListPageSearch);
    const type = useSelector(selectArticlesListPageType);
    const view = useSelector(selectArticlesListPageView);

    const onChangeView = useCallback(
        (view: ArticleViewType) => {
            dispatch(articlesListPageActions.setView(view));
        },
        [dispatch]
    );

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeOrder = useCallback(
        (order: SortOrder) => () => {
            dispatch(articlesListPageActions.setOrder(order));
            dispatch(articlesListPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData]
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesListPageActions.setSearch(search));
            dispatch(articlesListPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData]
    );

    const onChangeType = useCallback(
        (value: string) => {
            dispatch(articlesListPageActions.setType(value));
            dispatch(articlesListPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );

    return {
        order,
        search,
        type,
        view,
        onChangeView,
        onChangeOrder,
        onChangeSearch,
        onChangeType,
    };
};
