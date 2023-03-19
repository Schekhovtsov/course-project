/* eslint-disable no-unused-vars */
import avatar from 'shared/assets/icons/test/avatar.png';
import { ValidateProfileErrors } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
    firstName: 'John',
    lastName: 'Malkovich',
    city: 'New York',
    avatar,
};

describe('entity/Profile/services/validateProfileData', () => {
    test('Должен вернуть результат без ошибок', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('Должен вернуть ошибку при отсутствии имени', async () => {
        const result = validateProfileData({
            ...data,
            firstName: '',
        });
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
    });
});