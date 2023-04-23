import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleType } from 'entities/Article';
import { selectArticlesListPagePaginationLimit } from '../selector/articlesListPageSelectors';

interface FetchArticlesListProps {
    page: number;
}

export const fetchArticlesList = createAsyncThunk<
    ArticleType[],
    FetchArticlesListProps,
    ThunkConfig<string>
>('ArticlesListPage/fetchArticlesList', async ({ page = 1 }, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const limit = selectArticlesListPagePaginationLimit(getState());

    try {
        const response = await extra.api.get<ArticleType[]>('/articles', {
            params: {
                _limit: limit,
                _page: page,
                _expand: 'user',
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        return rejectWithValue('Error when fetching articles');
    }
});
