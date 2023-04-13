/* eslint-disable no-unused-vars */
export interface Profile {
    id?: string;
    firstName?: string;
    lastName?: string;
    city?: string;
    avatar?: string;
}

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
