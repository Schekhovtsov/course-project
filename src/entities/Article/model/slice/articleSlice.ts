import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticleById } from '../services/fetchArticleById';
import { ArticleType, ArticleSchema } from '../types/Article';

const initialState: ArticleSchema = {
    isLoading: false,
    error: null,
    data: null,
};

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(
                fetchArticleById.fulfilled,
                (state, action: PayloadAction<ArticleType>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                }
            )
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
