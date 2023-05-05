import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleType } from '../types/Article';

export const fetchArticleById = createAsyncThunk<
    ArticleType,
    string,
    ThunkConfig<string>
>('profile/fetchArticleById', async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
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
