import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDynamicReducerLoader } from '@/shared/lib/hooks/useDynamicReducerLoader';
import { ReducersList } from '@/shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';
import { Input } from '@/shared/ui/deprecated/Input';
import { Text } from '@/shared/ui/deprecated/Text';
import { TextTheme } from '@/shared/ui/deprecated/Text/ui/Text';
import { Button } from '@/shared/ui/redesigned/Button';

import {
    selectError,
    selectIsLoading,
    selectPassword,
    selectUsername,
} from '../../model/selectors/loginSelectors';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import styles from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    useDynamicReducerLoader(initialReducers);

    const username = useSelector(selectUsername);
    const password = useSelector(selectPassword);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const onChangeUsernameHandler = useCallback(
        (value: string | undefined) => {
            dispatch(loginActions.setUsername(value ?? ''));
        },
        [dispatch]
    );

    const onChangePasswordHandler = useCallback(
        (value: string | undefined) => {
            dispatch(loginActions.setPassword(value ?? ''));
        },
        [dispatch]
    );

    const onLoginClickHandler = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, password, username, onSuccess]);

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Text title={`${t('Login form')}`} />
            <span className={styles.inputPlaceholder}>{`${t('Login')}`}</span>
            <Input
                onChange={onChangeUsernameHandler}
                value={username}
                placeholder={`${t('Login')}`}
                type="text"
                className={styles.input}
                autofocus
            />
            <span className={styles.inputPlaceholder}>
                {`${t('Password')}`}
            </span>
            <Input
                onChange={onChangePasswordHandler}
                value={password}
                placeholder={`${t('Password')}`}
                type="text"
                className={styles.input}
            />
            {error && (
                <Text
                    text={`${t('Wrong username or password')}`}
                    theme={TextTheme.ERROR}
                />
            )}
            <Button
                disabled={isLoading}
                onClick={onLoginClickHandler}
                className={styles.loginBtn}
            >
                {`${t('Log in')}`}
            </Button>
        </div>
    );
});

export default LoginForm;
