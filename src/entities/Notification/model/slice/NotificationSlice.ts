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
    // eslint-disable-next-line no-unused-vars
    extraReducers: (builder) => {
        //
    },
});

export const { actions: notificationActions } = notificationSlice;
export const { reducer: notificationReducer } = notificationSlice;
