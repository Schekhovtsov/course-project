import styles from './LanguageSwitcher.module.scss';
import ruFlag from 'shared/assets/icons/flags/ru.png';
import enFlag from 'shared/assets/icons/flags/en.png';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    const icon = i18n.language === 'ru' ? ruFlag : enFlag;

    return (
        <img
            onClick={toggleLanguage}
            className={styles.container}
            src={icon}
            alt={t('Language')}
            title={t('Language')}
        />
    );
};
