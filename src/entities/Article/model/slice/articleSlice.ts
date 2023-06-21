import { buildSlice } from '@/shared/store';
import { PayloadAction } from '@reduxjs/toolkit';

import { fetchArticleById } from '../services/fetchArticleById';
import { ArticleSchema, ArticleType } from '../types/Article';

const initialState: ArticleSchema = {
    isLoading: false,
    error: null,
    data: null,
};

export const articleSlice = buildSlice({
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

export const { actions: articleActions, useActions: useArticleActions } =
    articleSlice;
export const { reducer: articleReducer } = articleSlice;
