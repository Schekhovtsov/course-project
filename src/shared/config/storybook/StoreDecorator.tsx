/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleReducer } from 'entities/Article';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { articlePageCommentsReducer } from 'pages/ArticlePage/model/slice/articlePageCommentsSlice';
import { ReducersList } from 'shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    article: articleReducer,
    addCommentForm: addCommentFormReducer,
    articleComments: articlePageCommentsReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    (StoryComponent: Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );
