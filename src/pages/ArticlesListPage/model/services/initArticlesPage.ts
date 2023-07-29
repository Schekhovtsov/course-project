import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/lib/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    selectArticlesListPageInited
} from '../selector/articlesListPageSelectors';
import { fetchArticlesList } from '../services/fetchArticlesList';
import { articlesListPageActions } from '../slice/articlesListPageSlice';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('ArticlesListPage/initArticlesPage', async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const _inited = selectArticlesListPageInited(getState());

    if (!_inited) {
        const orderFromUrl = searchParams.get('order') as SortOrder;
        const sortFromUrl = searchParams.get('sort');
        const searchFromUrl = searchParams.get('search');
        const typeFromUrl = searchParams.get('type');

        if (orderFromUrl) {
            dispatch(articlesListPageActions.setOrder(orderFromUrl));
        }

        if (sortFromUrl) {
            dispatch(articlesListPageActions.setSort(sortFromUrl));
        }

        if (searchFromUrl) {
            dispatch(articlesListPageActions.setSearch(searchFromUrl));
        }

        if (typeFromUrl) {
            dispatch(articlesListPageActions.setType(typeFromUrl));
        }

        dispatch(articlesListPageActions.setInited());
        dispatch(fetchArticlesList({}));
    }
});
