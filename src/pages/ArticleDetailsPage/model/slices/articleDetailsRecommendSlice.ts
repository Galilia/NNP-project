import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchArticleRecommend } from '../services/fetchArticleRecommend/fetchArticleRecommend';
import { ArticleDetailsRecommendSchema } from '../../model/types/ArticleDetailsRecommendSchema';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

const recommendAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommend = recommendAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendAdapter.getInitialState(),
);

const articleDetailsRecommendSlice = createSlice({
    name: 'articleDetailsRecommendSlice',
    initialState: recommendAdapter.getInitialState<ArticleDetailsRecommendSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommend.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommend.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                recommendAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommend.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsRecommendReducer } = articleDetailsRecommendSlice;
