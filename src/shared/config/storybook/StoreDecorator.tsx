/* eslint-disable feature-sliced-design/layers-hierarchy */
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleReducer } from '@/entities/Article/model/slice/articleSlice';
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slice/addCommentFormSlice';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';
import { articlePageReducer } from '@/pages/ArticlePage/model/slice';
import { ReducersList } from '@/shared/lib/hooks/useDynamicReducerLoader';
import { Story } from '@storybook/react';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    article: articleReducer,
    addCommentForm: addCommentFormReducer,
    articlePage: articlePageReducer,
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
