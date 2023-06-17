import { createSlice } from '@reduxjs/toolkit';

import { AdminPanelPageSchema } from '../types/AdminPanelPage';

const initialState: AdminPanelPageSchema = {
    isLoading: false,
    error: null,
    data: {},
};

export const adminPanelPageSlice = createSlice({
    name: 'adminpanelpage',
    initialState,
    reducers: {},
});

export const { actions: adminPanelPageActions } = adminPanelPageSlice;
export const { reducer: adminPanelPageReducer } = adminPanelPageSlice;
