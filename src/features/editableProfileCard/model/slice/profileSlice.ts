import { Profile } from '@/entities/Profile';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { updateProfileData } from '../../model/services/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData';
import { ProfileSchema } from '../types/editableProfileCard';

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
                ...state.tempData,
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
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.validateErrors = [];
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.readOnly = true;
                    state.data = action.payload;
                    state.tempData = action.payload;
                    state.validateErrors = [];
                }
            )
            .addCase(updateProfileData.rejected, (state, action) => {
                state.validateErrors = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
