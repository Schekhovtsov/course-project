import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';

export interface StateSchema {
    user: UserSchema;
    loginForm?: LoginSchema;
}
