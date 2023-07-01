import { LS_USER_KEY } from '@/shared/constants/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
    _mounted: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(LS_USER_KEY);
            if (user) {
                const json = JSON.parse(user) as User;
                state.authData = json;
                setFeatureFlags(json.features);
            }
            state._mounted = true;
        },
        logout: (state) => {
            localStorage.removeItem(LS_USER_KEY);
            state.authData = null;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
