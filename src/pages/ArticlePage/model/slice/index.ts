import { combineReducers } from '@reduxjs/toolkit';
import { articlePageCommentsReducer } from '../slice/articlePageCommentsSlice';
import { articlePageRecommendsReducer } from '../slice/articlePageRecommendsSlice';
import { ArticlePageSchema } from '../types/ArticlePage.types';

export const articlePageReducer = combineReducers<ArticlePageSchema>({
    comments: articlePageCommentsReducer,
    recommends: articlePageRecommendsReducer,
});
