import { StateSchema } from '@/app/providers/StoreProvider';
import { selectArticle } from './articleSelectors';

describe('articleSelectors', () => {
    test('selectArticle: Должен вернуть данные', () => {
        const data = {
            id: '1',
            title: 'Заголовок статьи',
        };
        const state: DeepPartial<StateSchema> = {
            article: {
                data,
            },
        };
        expect(selectArticle(state as StateSchema)).toEqual(data);
    });

    test('selectArticle: Должен вернуть undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectArticle(state as StateSchema)).toEqual(undefined);
    });
});
