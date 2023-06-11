import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleType } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams';
import {
    selectArticlesListPagePaginationLimit,
    selectArticlesListPagePaginationPage,
    selectArticlesListPageSearch,
    selectArticlesListPageSort,
    selectArticlesListPageSortOrder,
    selectArticlesListPageType,
} from '../selector/articlesListPageSelectors';

interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    ArticleType[],
    FetchArticlesListProps,
    ThunkConfig<string>
>('ArticlesListPage/fetchArticlesList', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const limit = selectArticlesListPagePaginationLimit(getState());
    const sort = selectArticlesListPageSort(getState());
    const page = selectArticlesListPagePaginationPage(getState());
    const order = selectArticlesListPageSortOrder(getState());
    const search = selectArticlesListPageSearch(getState());
    const type = selectArticlesListPageType(getState());

    try {
        addQueryParams({
            sort,
            order,
            search,
            type,
        });
        const response = await extra.api.get<ArticleType[]>('/articles', {
            params: {
                _limit: limit,
                _page: page,
                _expand: 'user',
                _sort: sort,
                _order: order,
                q: search,
                tags: type === 'All' ? undefined : type,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        return rejectWithValue('Error when fetching articles');
    }
});
