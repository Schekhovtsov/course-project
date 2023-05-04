import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleType } from 'entities/Article';
import { fetchArticlesRecommends } from 'pages/ArticlePage/model/services/fetchArticleRecommends';
import { ArticlePageRecommendsSchema } from '../types/ArticlePage.types';

const recommendationsAdapter = createEntityAdapter<ArticleType>({
    selectId: (article) => article.id,
});

export const getArticleRecommends =
    recommendationsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articlePage?.recommends || recommendationsAdapter.getInitialState()
    );

const articlePageRecommendsSlice = createSlice({
    name: 'articlePageRecommendsSlice',
    initialState:
        recommendationsAdapter.getInitialState<ArticlePageRecommendsSchema>({
            error: null,
            isLoading: false,
            ids: [],
            entities: {},
        }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesRecommends.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchArticlesRecommends.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticlesRecommends.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlePageRecommendsReducer } =
    articlePageRecommendsSlice;
export const { actions: articlePageRecommendsActions } =
    articlePageRecommendsSlice;
