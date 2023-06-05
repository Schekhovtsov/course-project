import { createSlice } from '@reduxjs/toolkit';
import { NotificationSchema } from '../types/notification';

const initialState: NotificationSchema = {
    isLoading: false,
    error: null,
};

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //
    },
});

export const { actions: notificationActions } = notificationSlice;
export const { reducer: notificationReducer } = notificationSlice;
