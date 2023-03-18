import { StateSchema } from 'app/providers/StoreProvider';

export const selectProfile = (state: StateSchema) => state.profile?.data;

export const selectProfileTemp = (state: StateSchema) =>
    state.profile?.tempData;

export const selectReadOnlyStatus = (state: StateSchema) =>
    state.profile?.readOnly;

export const selectIsLoading = (state: StateSchema) => state.profile?.isLoading;

export const selectError = (state: StateSchema) => state.profile?.error;

export const selectValidateErrors = (state: StateSchema) =>
    state.profile?.validateErrors;
