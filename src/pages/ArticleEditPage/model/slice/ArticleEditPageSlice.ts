import { createSlice } from '@reduxjs/toolkit';

import { ArticleEditPageSchema } from '../types/ArticleEditPage';

const initialState: ArticleEditPageSchema = {
    isLoading: false,
    error: null,
};

export const articleEditPageSlice = createSlice({
    name: 'articleeditpage',
    initialState,
    reducers: {},
});

export const { actions: articleEditPageActions } = articleEditPageSlice;
export const { reducer: articleEditPageReducer } = articleEditPageSlice;
