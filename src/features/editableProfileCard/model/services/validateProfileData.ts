import { Profile } from 'entities/Profile';
import { ValidateProfileErrors } from '../types/editableProfileCard';

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
