import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecommendIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations?.isLoading;
};
export const getArticleRecommendError = (state: StateSchema) => state.articleDetailsPage?.recommendations?.error;
