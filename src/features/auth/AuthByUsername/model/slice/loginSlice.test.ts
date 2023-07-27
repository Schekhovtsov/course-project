import { loginActions, loginReducer } from '../slice/loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('Должен установить username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername('123'))
        ).toEqual({ username: '123' });
    });

    test('Должен установить password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword('123'))
        ).toEqual({ password: '123' });
    });
});
