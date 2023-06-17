import {
    selectError,
    selectIsLoading,
    selectUsername,
    selectPassword,
} from './loginSelectors';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('loginSelectors', () => {
    test('SelectError: Должен вернуть ошибку', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { error: 'error' },
        };
        expect(selectError(state as StateSchema)).toEqual('error');
    });

    test('SelectIsLoading: Должен вернуть true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: true },
        };
        expect(selectIsLoading(state as StateSchema)).toEqual(true);
    });

    test('SelectIsLoading: Должен вернуть false', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: false },
        };
        expect(selectIsLoading(state as StateSchema)).toEqual(false);
    });

    test('selectUsernamem Должен вернуть username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'Admin' },
        };
        expect(selectUsername(state as StateSchema)).toEqual('Admin');
    });

    test('selectPassword: Должен вернуть password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: '12345' },
        };
        expect(selectPassword(state as StateSchema)).toEqual('12345');
    });
});
