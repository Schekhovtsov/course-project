import { StateSchema } from 'app/providers/StoreProvider';

export const selectUsername = (state: StateSchema) =>
    state?.loginForm?.username ?? '';
export const selectPassword = (state: StateSchema) =>
    state?.loginForm?.password ?? '';
export const selectError = (state: StateSchema) =>
    state?.loginForm?.error || null;
export const selectIsLoading = (state: StateSchema) =>
    state?.loginForm?.isLoading || false;
