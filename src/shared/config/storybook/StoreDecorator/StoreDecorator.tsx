import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/testing';
import '@/app/styles/index.scss';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { articleCommentsReducer } from '@/features/ArticleComments/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { profileReducer } from '@/widgets/EditableProfileCard';

const defaultAsyncReducer: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: articleCommentsReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
