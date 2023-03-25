import { StateSchema } from 'app/providers/StoreProvider';

export const selectArticle = (state: StateSchema) => state.article?.data;

export const selectIsLoading = (state: StateSchema) => state.article?.isLoading;

export const selectError = (state: StateSchema) => state.article?.error;
