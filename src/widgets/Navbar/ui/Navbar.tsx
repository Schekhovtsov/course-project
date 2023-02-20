import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.container, {}, [className])}>
            {t('Site name')}
        </div>
    );
}
