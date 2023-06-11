import { StateSchema } from '@/app/providers/StoreProvider';
import avatar from '@/shared/assets/icons/tests/avatar.png';
import { ValidateProfileErrors } from '../consts/consts';
import {
    selectError,
    selectIsLoading,
    selectProfile,
    selectReadOnlyStatus,
    selectValidateErrors,
} from './profileSelectors';

describe('profileSelectors', () => {
    const data = {
        firstName: 'John',
        lastName: 'Malkovich',
        city: 'New York',
        avatar,
    };

    test('selectProfile: Должен вернуть данные', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                tempData: {
                    firstName: 'John',
                    lastName: 'Malkovich',
                    city: 'New York',
                    avatar,
                },
            },
        };
        expect(selectProfile(state as StateSchema)).toEqual(data);
    });

    test('selectProfile: Должен вернуть undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfile(state as StateSchema)).toEqual(undefined);
    });

    test('selectError: Должен вернуть данные', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: '123',
            },
        };
        expect(selectError(state as StateSchema)).toEqual('123');
    });

    test('selectError: Должен вернуть undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectError(state as StateSchema)).toEqual(undefined);
    });

    test('selectIsLoading: Должен вернуть данные', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(selectIsLoading(state as StateSchema)).toEqual(true);
    });

    test('selectIsLoading: Должен вернуть undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectIsLoading(state as StateSchema)).toEqual(undefined);
    });

    test('selectReadOnlyStatus: Должен вернуть данные', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readOnly: true,
            },
        };
        expect(selectReadOnlyStatus(state as StateSchema)).toEqual(true);
    });

    test('selectIsLoading: Должен вернуть undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectReadOnlyStatus(state as StateSchema)).toEqual(undefined);
    });

    test('selectValidateErrors: Должен вернуть данные', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileErrors.SERVER_ERROR,
                    ValidateProfileErrors.INCORRECT_USER_DATA,
                ],
            },
        };
        expect(selectValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileErrors.SERVER_ERROR,
            ValidateProfileErrors.INCORRECT_USER_DATA,
        ]);
    });

    test('selectProfileValidateErrors: Должен вернуть undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
