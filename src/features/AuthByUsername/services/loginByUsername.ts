import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { LS_USER_KEY } from 'shared/constants/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await axios.post<User>(
                'http://localhost:8000/login',
                {
                    username,
                    password,
                }
            );

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(LS_USER_KEY, JSON.stringify(response.data));

            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
            return thunkAPI.rejectWithValue('Wrong username or password');
        }
    }
);
