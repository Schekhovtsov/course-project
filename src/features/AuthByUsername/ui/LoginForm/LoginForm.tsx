import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <span className={styles.inputPlaceholder}>{t('Login')}</span>
            <Input
                placeholder={t('Login')}
                type="text"
                className={styles.input}
                autofocus
            />
            <span className={styles.inputPlaceholder}>{t('Password')}</span>
            <Input
                placeholder={t('Password')}
                type="text"
                className={styles.input}
            />
            <Button className={styles.loginBtn}>{t('Log in')}</Button>
        </div>
    );
};
