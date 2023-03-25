import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { [FTName], [FTName]Schema } from '../types/[FTName]';

const initialState: [FTName]Schema = {
    isLoading: false,
    error: null,
    data: null,
};

export const [FTName | lowercasefirstchar]Slice = createSlice({
    name: '[FTName | lowercase]',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(service.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(
                service.fulfilled, (state, action: PayloadAction<[FTName]>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                }
            )
            .addCase(service.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
});

export const { actions: [FTName | lowercasefirstchar]Actions } = [FTName | lowercasefirstchar]Slice;
export const { reducer: [FTName | lowercasefirstchar]Reducer } = [FTName | lowercasefirstchar]Slice;
