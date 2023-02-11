import ruFlag from 'shared/assets/icons/flags/ru.png';
import enFlag from 'shared/assets/icons/flags/en.png';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    const icon = i18n.language === 'ru' ? ruFlag : enFlag;

    return (
        <img
            onKeyDown={toggleLanguage}
            onClick={toggleLanguage}
            className={classNames(styles.container, {}, [className])}
            src={icon}
            alt={t('Language')}
            title={t('Language')}
        />
    );
}
