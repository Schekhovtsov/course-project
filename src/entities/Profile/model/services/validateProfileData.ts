import { Profile, ValidateProfileErrors } from '../types/profile';

export const validateProfileData = (profile: Profile) => {
    const { firstName, lastName } = profile;
    const errors: ValidateProfileErrors[] = [];

    if (!firstName || !lastName) {
        errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
    }

    return errors;
};
