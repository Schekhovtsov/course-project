/* eslint-disable consistent-return */
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { setJsonSettingsMutation } from '../../api/userApi';
import { selectJsonSettings } from '../selectors/jsonSettingsSelector';
import { selectUserAuthData } from '../selectors/userSelector';
import { JsonSettings } from '../types/userSettings';

export const saveJsonSettings = createAsyncThunk<
    any,
    JsonSettings,
    ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkAPI) => {
    const { getState, rejectWithValue, dispatch } = thunkAPI;
    const userData = selectUserAuthData(getState());
    const currentSettings = selectJsonSettings(getState());

    if (!userData) {
        return rejectWithValue('Пользователь не найден');
    }

    try {
        const response = await dispatch(
            setJsonSettingsMutation({
                userId: userData.id,
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings,
                },
            })
        ).unwrap();

        if (!response.jsonSettings) {
            return rejectWithValue('Настройки не найдены');
        }

        return response.jsonSettings;
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
    }
});
