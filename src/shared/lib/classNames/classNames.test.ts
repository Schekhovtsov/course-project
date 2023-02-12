import { classNames } from './classNames';

describe('classNames', () => {
    test('Проверяет работу функции с единственным параметром', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('Проверяет работу функции с дополнительными классами', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expected,
        );
    });

    test('Проверяет работу функции с дополнительными модами. Сценарий 1', () => {
        const expected = 'someClass class1 class2 hover scrollable';
        expect(
            classNames('someClass', { hover: true, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });

    test('Проверяет работу функции с дополнительными модами. Сценарий 2', () => {
        const expected = 'someClass class1 class2 scrollable';
        expect(
            classNames('someClass', { hover: false, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });

    test('Проверяет работу функции с дополнительными модами. Сценарий 3', () => {
        const expected = 'someClass class1 class2 scrollable';
        expect(
            classNames('someClass', { hover: undefined, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });
});
