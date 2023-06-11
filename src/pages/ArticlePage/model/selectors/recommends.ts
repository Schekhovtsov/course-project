import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecommendsIsLoading = (state: StateSchema) =>
    state.articlePage?.recommends.isLoading;

export const getArticleRecommendsError = (state: StateSchema) =>
    state.articlePage?.recommends.error;
