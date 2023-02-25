import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
    test('Должен увеличить счетчик на единицу', () => {
        const state: CounterSchema = {
            value: 10,
        };
        const action = counterActions.increment;
        expect(counterReducer(state, action)).toEqual({ value: 11 });
    });

    test('Должен уменьшить счетчик на единицу', () => {
        const state: CounterSchema = {
            value: 10,
        };
        const action = counterActions.decrement;
        expect(counterReducer(state, action)).toEqual({ value: 9 });
    });

    test('Должен взять initial state и добавить к нему единицу', () => {
        const action = counterActions.increment;
        expect(counterReducer(undefined, action)).toEqual({ value: 1 });
    });
});
