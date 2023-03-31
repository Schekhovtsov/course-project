import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { CommentType } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    CommentType[],
    string | undefined,
    ThunkConfig<string>
>('articlePage/fetchCommentsByArticleId', async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    if (!articleId) {
        return rejectWithValue('Article was not found');
    }

    try {
        const response = await extra.api.get<CommentType[]>('/comments/', {
            params: {
                articleId,
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
        return rejectWithValue('Error when loading profile');
    }
});
