import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
        dispatch(
            articlesPageActions.setOrder(
                (searchParams.get('order') as SortOrder) ?? '',
            ),
        );
        dispatch(
            articlesPageActions.setSort(
                (searchParams.get('sort') as ArticleSortField) ?? '',
            ),
        );
        dispatch(
            articlesPageActions.setSearch(searchParams.get('search') ?? ''),
        );
        dispatch(
            articlesPageActions.setType(
                (searchParams.get('type') as ArticleType) ?? ArticleType.ALL,
            ),
        );

        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({}));
    }
});
