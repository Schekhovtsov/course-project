/* eslint-disable no-unused-vars */
import { Profile } from '@/entities/Profile';

import { ValidateProfileErrors } from '../consts/consts';

export interface ProfileSchema {
    data?: Profile | null;
    tempData?: Profile | null;
    isLoading: boolean;
    error?: string | null;
    readOnly?: boolean;
    validateErrors?: ValidateProfileErrors[];
}
