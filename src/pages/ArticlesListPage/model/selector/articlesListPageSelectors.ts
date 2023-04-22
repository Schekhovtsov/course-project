import { StateSchema } from 'app/providers/StoreProvider';

export const selectArticlesListPageIsLoading = (state: StateSchema) =>
    state.articlesListPage?.isLoading;

export const selectArticlesListPageError = (state: StateSchema) =>
    state.articlesListPage?.error;

export const selectArticlesListPageView = (state: StateSchema) =>
    state.articlesListPage?.view;
