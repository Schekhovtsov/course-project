/* eslint-disable no-unused-vars */
import avatar from '@/shared/assets/icons/test/avatar.png';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';

import { fetchProfileData } from './fetchProfileData';

const data = {
    id: '1',
    firstName: 'John',
    lastName: 'Malkovich',
    city: 'New York',
    role: 'admin',
    avatar,
};

describe('entity/Profile/services/fetchProfileData', () => {
    test('Должен отослать запрос на сервер и принять ответ', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('Должен принять от сервера ошибку 403', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
