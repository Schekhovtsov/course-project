import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleType } from 'entities/Article';
import { ArticleViewType } from 'entities/Article/model/types/Article';
import { LS_ARTICLES_LIST_VIEW } from 'shared/constants/localStorage';
import { fetchArticlesList } from '../services/fetchArticlesList';
import { ArticlesListPageSchema } from '../types/articlesListPageSchema';

const articlesAdapter = createEntityAdapter<ArticleType>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesListPage || articlesAdapter.getInitialState()
);

const articlesListPageSlice = createSlice({
    name: 'articlesListPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesListPageSchema>({
        error: null,
        isLoading: false,
        view:
            (localStorage.getItem(LS_ARTICLES_LIST_VIEW) as ArticleViewType) ??
            'list',
        hasMore: true,
        limit: 3,
        page: 0,
        ids: [],
        entities: {},
        _inited: false,
    }),
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(
                fetchArticlesList.fulfilled,
                (state, action: PayloadAction<ArticleType[]>) => {
                    state.isLoading = false;
                    articlesAdapter.addMany(state, action.payload);
                    state.hasMore = action.payload.length > 0;
                }
            )
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlesListPageReducer } = articlesListPageSlice;
export const { actions: articlesListPageActions } = articlesListPageSlice;
