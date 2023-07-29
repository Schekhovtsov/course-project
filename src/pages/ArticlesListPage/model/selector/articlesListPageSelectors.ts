import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/store';

export const selectArticlesListPageIsLoading = (state: StateSchema) =>
    state.articlesListPage?.isLoading;

export const selectArticlesListPageError = (state: StateSchema) =>
    state.articlesListPage?.error;

export const selectArticlesListPageView = (state: StateSchema) =>
    state.articlesListPage?.view;

export const selectArticlesListPagePaginationPage = (state: StateSchema) =>
    state.articlesListPage?.page ?? 1;

export const selectArticlesListPagePaginationLimit = (state: StateSchema) =>
    state.articlesListPage?.limit ?? 6;

export const selectArticlesListPagePaginationHasMore = (state: StateSchema) =>
    state.articlesListPage?.hasMore ?? true;

export const selectArticlesListPageInited = (state: StateSchema) =>
    state.articlesListPage?._inited ?? false;

export const selectArticlesListPageSearch = (state: StateSchema) =>
    state.articlesListPage?.search ?? '';

export const selectArticlesListPageType = (state: StateSchema) =>
    state.articlesListPage?.type ?? 'All';

export const selectArticlesListPageSortOrder = (state: StateSchema) =>
    state.articlesListPage?.order ?? 'desc';

export const selectArticlesListPageSort = (state: StateSchema) =>
    state.articlesListPage?.sort ?? 'createdAt';

export const [useArticleItemById] = buildSelector(
    (state, id: string) => state.articlesListPage?.entities[id]
);
