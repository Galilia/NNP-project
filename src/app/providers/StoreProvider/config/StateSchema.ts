import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { ArticleDetailsSchema } from '@/entities/Article';
import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { ArticleCommentsSchema } from '@/features/ArticleComments';
import { LoginSchema } from '@/features/AuthByUsername';
// import {
//     ArticleDetailsCommentsSchema,
//     ArticleDetailsRecommendSchema,
// } from 'pages/ArticleDetailsPage';
import { ScrollSaveSchema } from '@/features/ScrollSave';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileSchema } from '@/widgets/EditableProfileCard';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    scrollSave: ScrollSaveSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,

    // Async reducers
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema;
    // articleDetailsComments?: ArticleDetailsCommentsSchema;
    // articleDetailsRecommend?: ArticleDetailsRecommendSchema;
    addCommentForm?: ArticleCommentsSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema
}
