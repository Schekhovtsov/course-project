// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { CommentSchema } from '../types/Comment';

// const initialState: CommentSchema = {
//     isLoading: false,
//     error: null,
//     data: null,
// };

// export const commentSlice = createSlice({
//     name: 'comment',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         // builder
//         //     .addCase(service.pending, (state) => {
//         //         state.isLoading = true;
//         //         state.error = null;
//         //     })
//         //     .addCase(
//         //         service.fulfilled,
//         //         (state, action: PayloadAction<Comment>) => {
//         //             state.isLoading = false;
//         //             state.data = action.payload;
//         //         }
//         //     )
//         //     .addCase(service.rejected, (state, action) => {
//         //         state.isLoading = false;
//         //         state.error = action.payload;
//         //     });
//     },
// });

// export const { actions: commentActions } = commentSlice;
// export const { reducer: commentReducer } = commentSlice;
