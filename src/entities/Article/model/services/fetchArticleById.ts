import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ArticleType } from '../types/Article';

export const fetchArticleById = createAsyncThunk<
    ArticleType,
    string | undefined,
    ThunkConfig<string>
>('profile/fetchArticleById', async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        if (!articleId) {
            throw new Error('Article Id not found');
        }

        const response = await extra.api.get<ArticleType>(
            `/articles/${articleId}`,
            {
                params: { _expand: 'user' },
            }
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        return rejectWithValue('Error when article loading');
    }
});
