import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    selectArticlesListPageIsLoading,
    selectArticlesListPagePaginationHasMore,
} from '../selector/articlesListPageSelectors';
import { fetchArticlesList } from '../services/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('ArticlesListPage/fetchNextArticlesPage', async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const isLoading = selectArticlesListPageIsLoading(getState());
    const hasMore = selectArticlesListPagePaginationHasMore(getState());

    if (hasMore && !isLoading) {
        dispatch(fetchArticlesList({}));
    }
});
