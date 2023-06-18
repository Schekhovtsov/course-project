import { ThunkConfig } from '@/app/providers/StoreProvider';
import { selectArticle } from '@/entities/Article';
import { selectUserAuthData } from '@/entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('ArticlePage/addCommentForArticle', async (text, thunkAPI) => {
    const { extra, rejectWithValue, dispatch, getState } = thunkAPI;

    const userData = selectUserAuthData(getState());
    const article = selectArticle(getState());

    if (!userData || !text || !article) {
        return rejectWithValue('No data');
    }

    try {
        const response = await extra.api.post<Comment>('/comments', {
            articleId: article.id,
            userId: userData.id,
            text,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentsByArticleId(article.id));

        return response.data;
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        return rejectWithValue('Error when adding comment');
    }
});
