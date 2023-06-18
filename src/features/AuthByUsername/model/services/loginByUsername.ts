import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import { LS_USER_KEY } from '@/shared/constants/localStorage';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkAPI) => {
    const { username, password } = authData;
    const { dispatch, extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.post<User>('/login', {
            username,
            password,
        });

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(LS_USER_KEY, JSON.stringify(response.data));

        dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        return rejectWithValue('Wrong username or password');
    }
});
