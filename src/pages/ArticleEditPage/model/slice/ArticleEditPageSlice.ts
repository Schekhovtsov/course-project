import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    ArticleEditPage,
    ArticleEditPageSchema,
} from '../types/ArticleEditPage';

const initialState: ArticleEditPageSchema = {
    isLoading: false,
    error: null,
    data: null,
};

export const articleEditPageSlice = createSlice({
    name: 'articleeditpage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //
    },
});

export const { actions: articleEditPageActions } = articleEditPageSlice;
export const { reducer: articleEditPageReducer } = articleEditPageSlice;
