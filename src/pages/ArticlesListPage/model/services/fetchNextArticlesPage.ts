import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchArticlesList } from '../services/fetchArticlesList';
import { articlesListPageActions } from '../slice/articlesListPageSlice';
import {
    selectArticlesListPageIsLoading,
    selectArticlesListPagePaginationHasMore,
    selectArticlesListPagePaginationPage,
} from '../selector/articlesListPageSelectors';

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
