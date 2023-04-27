import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { useSelector } from 'react-redux';
import { fetchArticlesList } from '../services/fetchArticlesList';
import {
    selectArticlesListPageInited,
    selectArticlesListPagePaginationPage,
} from '../selector/articlesListPageSelectors';
import { articlesListPageActions } from '../slice/articlesListPageSlice';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('ArticlesListPage/initArticlesPage', async (_, thunkAPI) => {
    const { dispatch } = thunkAPI;

    const page = useSelector(selectArticlesListPagePaginationPage);
    const _inited = useSelector(selectArticlesListPageInited);

    if (!_inited) {
        dispatch(
            fetchArticlesList({
                page,
            })
        );
        dispatch(articlesListPageActions.setInited());
    }
});
