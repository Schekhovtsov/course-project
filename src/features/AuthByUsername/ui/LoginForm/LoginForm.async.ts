import { LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { FC, lazy } from 'react';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () => new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => resolve(import('./LoginForm')), 1500);
    }),
);
