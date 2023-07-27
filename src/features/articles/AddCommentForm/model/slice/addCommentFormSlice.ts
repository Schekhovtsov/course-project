import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
    AddCommentFormSchema,
} from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    isLoading: false,
    error: null,
    text: null,
};

export const addCommentFormSlice = createSlice({
    name: 'addcommentform',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(service.pending, (state) => {
    //             state.isLoading = true;
    //             state.error = null;
    //         })
    //         .addCase(
    //             service.fulfilled,
    //             (state, action: PayloadAction<AddCommentFormType>) => {
    //                 state.isLoading = false;
    //                 state.data = action.payload;
    //             }
    //         )
    //         .addCase(service.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
