import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string>
>('profile/fetchProfileData', async (userId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.get<Profile>(`/profile/${userId}`);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        return rejectWithValue('Error when loading profile');
    }
});
