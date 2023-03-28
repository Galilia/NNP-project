import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    },
);
