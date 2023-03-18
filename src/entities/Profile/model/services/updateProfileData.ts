import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { validateProdileData } from './validateProfileData';
import { selectProfileTemp } from '../selector/profileSelectors';
import { Profile, ValidateProfileErrors } from '../types/profile';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileErrors[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = selectProfileTemp(getState());

    const errors = validateProdileData(formData);

    if (errors.length) {
        return rejectWithValue(errors);
    }

    try {
        const response = await extra.api.put<Profile>('/profile', formData);
        return response.data;
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
    }
});
