import { StateSchema } from 'app/providers/StoreProvider';

export const selectArticlesListPageIsLoading = (state: StateSchema) =>
    state.articlesListPage?.isLoading;

export const selectArticlesListPageError = (state: StateSchema) =>
    state.articlesListPage?.error;

export const selectArticlesListPageView = (state: StateSchema) =>
    state.articlesListPage?.view;

export const selectArticlesListPagePaginationPage = (state: StateSchema) =>
    state.articlesListPage?.page ?? 1;

export const selectArticlesListPagePaginationLimit = (state: StateSchema) =>
    state.articlesListPage?.limit ?? 3;

export const selectArticlesListPagePaginationHasMore = (state: StateSchema) =>
    state.articlesListPage?.hasMore ?? true;

export const selectArticlesListPageInited = (state: StateSchema) =>
    state.articlesListPage?._inited ?? false;
