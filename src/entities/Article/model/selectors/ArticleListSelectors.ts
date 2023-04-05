import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleListItemId = (state: StateSchema) => state.articleDetails?.data;
