/* eslint-disable no-unused-vars */
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';

import { fetchArticlesList } from './fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('./fetchArticlesList');

describe('pages/ArticlesListPage/services/fetchNextArticlesPage', () => {
    test('Должен загрузить новую пачку статей', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesListPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 3,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalled();
    });

    test('Статей больше нет - ничего не подгружает', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesListPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 3,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
