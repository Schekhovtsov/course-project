import { ValidateProfileErrors } from '../consts/consts';

import { Profile } from '@/entities/Profile';

export const validateProfileData = (profile?: Profile) => {
    const errors: ValidateProfileErrors[] = [];

    if (profile) {
        const { firstName, lastName } = profile;

        if (!firstName || !lastName) {
            errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
        }
    }
    return errors;
};
