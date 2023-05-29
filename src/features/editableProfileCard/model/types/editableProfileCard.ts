/* eslint-disable no-unused-vars */
import { Profile } from 'entities/Profile';

export enum ValidateProfileErrors {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
    data?: Profile | null;
    tempData?: Profile | null;
    isLoading: boolean;
    error?: string | null;
    readOnly?: boolean;
    validateErrors?: ValidateProfileErrors[];
}
