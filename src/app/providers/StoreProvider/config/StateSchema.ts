/* eslint-disable no-unused-vars */
import { ArticleSchema } from '@/entities/Article';
import { UserSchema } from '@/entities/User';
import { AddCommentFormSchema } from '@/features/articles/AddCommentForm';
import { LoginSchema } from '@/features/auth/AuthByUsername/model/types/loginSchema';
import { ProfileSchema } from '@/features/profile/editableProfileCard';
import { ScrollRestorationSchema } from '@/features/ui/ScrollRestoration';
import { ArticlePageSchema } from '@/pages/ArticlePage';
import { ArticlesListPageSchema } from '@/pages/ArticlesListPage';
import { rtkApi } from '@/shared/api/rtkApi';
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';

import { AxiosInstance } from 'axios';

export interface StateSchema {
    user: UserSchema;
    scrollRestoration: ScrollRestorationSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // Async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    article?: ArticleSchema;
    articlePage?: ArticlePageSchema;
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
