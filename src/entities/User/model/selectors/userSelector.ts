import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { UserRole } from '../types/user';

export const selectUserAuthData = (state: StateSchema) => state.user.authData;

export const selectUserIsMounted = (state: StateSchema) => state.user._mounted;

export const selectUserRoles = (state: StateSchema) =>
    state.user.authData?.roles;

export const selectIsUserAdmin = createSelector(
    selectUserRoles,
    (roles) => Boolean(roles?.includes(UserRole.ADMIN))
    // eslint-disable-next-line function-paren-newline
);

export const selectIsUserModerator = createSelector(
    selectUserRoles,
    (roles) => Boolean(roles?.includes(UserRole.MODERATOR))
    // eslint-disable-next-line function-paren-newline
);
