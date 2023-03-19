/* eslint-disable no-unused-vars */
import avatar from 'shared/assets/icons/test/avatar.png';
import { ValidateProfileErrors } from 'entities/Profile/model/types/profile';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { updateProfileData } from './updateProfileData';

const data = {
    firstName: 'John',
    lastName: 'Malkovich',
    city: 'New York',
    avatar,
};

describe('entity/Profile/services/updateProfileData', () => {
    test('Должен вернуть результат без ошибок', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                tempData: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('Должен вернуть серверную ошибку', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                tempData: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
    });

    test('Должен вернуть клиентскую ошибку', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                tempData: { ...data, firstName: '' },
            },
        });

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
        ]);
    });
});
