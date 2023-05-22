import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('Добавляем один параметр', () => {
        const params = getQueryParams({
            first: '1',
        });
        expect(params).toBe('?first=1');
    });

    test('Добавляем два параметра', () => {
        const params = getQueryParams({
            first: '1',
            second: '2',
        });
        expect(params).toBe('?first=1&second=2');
    });

    test('Добавляем пустой параметр', () => {
        const params = getQueryParams({
            first: '1',
            second: undefined,
        });
        expect(params).toBe('?first=1');
    });
});
