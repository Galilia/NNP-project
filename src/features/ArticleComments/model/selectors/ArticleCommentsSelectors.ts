import { StateSchema } from '@/app/providers/StoreProvider';

export const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text ?? '';
export const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error;
// TODO articleDetailsPage maybe put into addCommentForm
export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;
