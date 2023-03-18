/* eslint-disable no-unused-vars */
export interface Profile {
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
    data?: Profile;
    tempData?: Profile;
    isLoading: boolean;
    error?: string;
    readOnly?: boolean;
    validateErrors?: ValidateProfileErrors[];
}
