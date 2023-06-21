import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/store';

export const [useSelectArticle, selectArticle] = buildSelector(
    (state: StateSchema) => state.article?.data
);

export const selectIsLoading = (state: StateSchema) => state.article?.isLoading;

export const selectError = (state: StateSchema) => state.article?.error;
