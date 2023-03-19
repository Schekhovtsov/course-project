import avatar from 'shared/assets/icons/test/avatar.png';
import { profileActions, profileReducer } from './profileSlice';
import {
    ProfileSchema,
    updateProfileData,
    ValidateProfileErrors,
} from '../../../profile';

const data = {
    firstName: 'John',
    lastName: 'Malkovich',
    city: 'New York',
    avatar,
};

describe('entities/Profile/model/profileSlice reducers', () => {
    test('Должен установить readOnly из false в true', () => {
        const state: DeepPartial<ProfileSchema> = { readOnly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadOnly(true)
            )
        ).toEqual({ readOnly: true });
    });

    test('Должен протестировать extra-reducer fetchProfileData:pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending)
        ).toEqual({ isLoading: true, validateErrors: [] });
    });

    test('Должен протестировать extra-reducer fetchProfileData:fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, '')
            )
        ).toEqual({
            isLoading: false,
            readOnly: true,
            validateErrors: [],
            data,
            tempData: data,
        });
    });
});
