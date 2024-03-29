/* eslint-disable no-unused-vars */
import avatar from '@/shared/assets/icons/tests/avatar.png';

import { ValidateProfileErrors } from '../consts/consts';
import { validateProfileData } from './validateProfileData';

const data = {
    id: '1',
    firstName: 'John',
    lastName: 'Malkovich',
    city: 'New York',
    avatar,
};

describe('features/EditableProfileCard/model/services/valicdateProfileData', () => {
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
