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
      //
    },
});

export const { actions: [FTName | lowercasefirstchar]Actions } = [FTName | lowercasefirstchar]Slice;
export const { reducer: [FTName | lowercasefirstchar]Reducer } = [FTName | lowercasefirstchar]Slice;
