import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateProfileData } from 'entities/Profile';
import { fetchProfileData } from '../services/fetchProfileData';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    isLoading: false,
    readOnly: true,
    error: null,
    data: null,
    tempData: null,
    validateErrors: [],
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadOnly: (state, { payload }: PayloadAction<boolean>) => {
            state.readOnly = payload;
        },
        cancelEdit: (state) => {
            state.readOnly = true;
            state.tempData = state.data;
            state.validateErrors = [];
        },
        updateProfile: (state, { payload }: PayloadAction<Profile>) => {
            state.tempData = {
                ...state.data,
                ...payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.tempData = action.payload;
                }
            )
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.validateErrors = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined;
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.readOnly = true;
                    state.data = action.payload;
                    state.tempData = action.payload;
                    state.validateErrors = null;
                }
            )
            .addCase(updateProfileData.rejected, (state, action) => {
                state.validateErrors = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;