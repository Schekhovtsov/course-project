import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleRating, ArticleRatingSchema } from '../types/ArticleRating';

const initialState: ArticleRatingSchema = {
    isLoading: false,
    error: null,
    data: null,
};

export const articleRatingSlice = createSlice({
    name: 'articlerating',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //
    },
});

export const { actions: articleRatingActions } = articleRatingSlice;
export const { reducer: articleRatingReducer } = articleRatingSlice;
