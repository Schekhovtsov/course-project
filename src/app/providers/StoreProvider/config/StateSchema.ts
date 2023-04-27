/* eslint-disable no-unused-vars */
import {
    AnyAction,
    EnhancedStore,
    ReducersMapObject,
    Reducer,
    CombinedState,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleSchema } from 'entities/Article';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';
import { ScrollRestorationSchema } from 'features/ScrollRestoration';
import { ArticlePageCommentsSchema } from 'pages/ArticlePage';
import { ArticlesListPageSchema } from 'pages/ArticlesListPage';

export interface StateSchema {
    user: UserSchema;
    scrollRestoration: ScrollRestorationSchema;

    // Async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    article?: ArticleSchema;
    articleComments?: ArticlePageCommentsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesListPage?: ArticlesListPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManagerType {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore {
    reducerManager: ReducerManagerType;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
