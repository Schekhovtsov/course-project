import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    selectArticlesListPageIsLoading,
    selectArticlesListPagePaginationHasMore,
    selectArticlesListPagePaginationPage,
} from '../selector/articlesListPageSelectors';
import { fetchArticlesList } from '../services/fetchArticlesList';
import { articlesListPageActions } from '../slice/articlesListPageSlice';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('ArticlesListPage/fetchNextArticlesPage', async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const isLoading = selectArticlesListPageIsLoading(getState());
    const page = selectArticlesListPagePaginationPage(getState());
    const hasMore = selectArticlesListPagePaginationHasMore(getState());

    if (hasMore && !isLoading) {
        dispatch(fetchArticlesList({}));
        dispatch(articlesListPageActions.setPage(page + 1));
    }
});
