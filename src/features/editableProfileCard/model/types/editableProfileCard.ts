/* eslint-disable no-unused-vars */
import { ValidateProfileErrors } from '../consts/consts';

import { Profile } from '@/entities/Profile';

export interface ProfileSchema {
    data?: Profile | null;
    tempData?: Profile | null;
    isLoading: boolean;
    error?: string | null;
    readOnly?: boolean;
    validateErrors?: ValidateProfileErrors[];
}
