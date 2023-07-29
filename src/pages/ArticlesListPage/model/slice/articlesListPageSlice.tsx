import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleType } from '@/entities/Article';
import { ArticleViewType } from '@/entities/Article/model/types/Article';
import { LS_ARTICLES_LIST_VIEW } from '@/shared/constants/localStorage';
import { SortOrder } from '@/shared/lib/types';
import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

import { fetchArticlesList } from '../services/fetchArticlesList';
import { ArticlesListPageSchema } from '../types/articlesListPageSchema';

const articlesAdapter = createEntityAdapter<ArticleType>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesListPage || articlesAdapter.getInitialState()
);

const initialState = {
    error: null,
    isLoading: false,
    view:
        (localStorage.getItem(LS_ARTICLES_LIST_VIEW) as ArticleViewType) ??
        'list',
    hasMore: true,
    limit: 6,
    page: 1,
    ids: [],
    entities: {},
    order: 'desc',
    search: '',
    sort: 'createdAt',
    type: 'All',
    _inited: false,
};

const articlesListPageSlice = createSlice({
    name: 'articlesListPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesListPageSchema>(
        initialState as ArticlesListPageSchema
    ),
    reducers: {
        setView: (state, action: PayloadAction<ArticleViewType>) => {
            state.view = action.payload;
            localStorage.setItem(LS_ARTICLES_LIST_VIEW, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setInited: (state) => {
            state._inited = true;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<string>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<string>) => {
            state.type = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;

                state.hasMore = action.payload.length >= state.limit;
                state.page += 1;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlesListPageReducer } = articlesListPageSlice;
export const { actions: articlesListPageActions } = articlesListPageSlice;
