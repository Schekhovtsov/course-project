import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Проверяет, отображается ли счётчик на экране', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('title-value')).toHaveTextContent('10');
    });

    test('Проверяет, срабатывает ли инкремент по кнопке', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        fireEvent.click(screen.getByTestId('button-increment'));
        expect(screen.getByTestId('title-value')).toHaveTextContent('11');
    });

    test('Проверяет, срабатывает ли декремент по кнопке', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        fireEvent.click(screen.getByTestId('button-decrement'));
        expect(screen.getByTestId('title-value')).toHaveTextContent('9');
    });
});
