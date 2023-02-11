import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/ui/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <div className={styles.linksContainer}>
                <AppLink to={'/'}>{t('Home')}</AppLink>
                <AppLink to={'/about'}>{t('About')}</AppLink>
            </div>
        </div>
    );
};
