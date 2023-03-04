import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('123123'),
        )).toEqual({ username: '123123' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'pass' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('pass2000'),
        )).toEqual({ password: 'pass2000' });
    });

    test('test set email', () => {
        const state: DeepPartial<LoginSchema> = { email: 'il@gmail.com' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setEmail('il2@gmail.com'),
        )).toEqual({ email: 'il2@gmail.com' });
    });
});
