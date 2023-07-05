/* eslint-disable consistent-return */
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { LS_USER_KEY } from '@/shared/constants/localStorage';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { getUserDataByIdQuery } from '../../api/userApi';

export const initAuthData = createAsyncThunk<any, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;

        const userId = localStorage.getItem(LS_USER_KEY);

        if (!userId) {
            return rejectWithValue('Пользователь не найден');
        }

        try {
            const response = await dispatch(
                getUserDataByIdQuery(userId)
            ).unwrap();

            if (!response.jsonSettings) {
                return rejectWithValue('Настройки не найдены');
            }

            return response;
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
        }
    }
);
