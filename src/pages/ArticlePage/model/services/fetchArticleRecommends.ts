import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleType } from '@/entities/Article';

export const fetchArticlesRecommends = createAsyncThunk<
    ArticleType[],
    void,
    ThunkConfig<string>
>('ArticlePage/fetchArticlesRecommentds', async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.get<ArticleType[]>('/articles', {
            params: {
                _limit: 2,
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
