import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ValidateProfileErrors } from '../consts/consts';
import { selectProfile } from '../selector/profileSelectors';
import { validateProfileData } from './validateProfileData';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileErrors[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = selectProfile(getState());

    if (formData) {
        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }
    }

    try {
        const response = await extra.api.put<Profile>(
            `/profile/${formData?.id}`,
            formData
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
    }
});
