import { loginByUsername } from 'features/AuthByUsername/services/loginByUsername';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { ReducersList } from 'shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import {
    selectError,
    selectIsLoading,
    selectPassword,
    selectUsername,
} from '../../model/selectors/loginSelectors';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    useDynamicReducerLoader(initialReducers);

    const username = useSelector(selectUsername);
    const password = useSelector(selectPassword);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const onChangeUsernameHandler = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePasswordHandler = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClickHandler = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Text title={t('Login form')} />
            <span className={styles.inputPlaceholder}>{t('Login')}</span>
            <Input
                onChange={onChangeUsernameHandler}
                value={username}
                placeholder={t('Login')}
                type="text"
                className={styles.input}
                autofocus
            />
            <span className={styles.inputPlaceholder}>{t('Password')}</span>
            <Input
                onChange={onChangePasswordHandler}
                value={password}
                placeholder={t('Password')}
                type="text"
                className={styles.input}
            />
            {error && (
                <Text
                    text={t('Wrong username or password')}
                    theme={TextTheme.ERROR}
                />
            )}
            <Button
                disabled={isLoading}
                onClick={onLoginClickHandler}
                className={styles.loginBtn}
            >
                {t('Log in')}
            </Button>
        </div>
    );
});

export default LoginForm;
