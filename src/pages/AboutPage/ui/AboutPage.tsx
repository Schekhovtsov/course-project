import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');

    return <div>{t('About page')}</div>;
};

export default AboutPage;
