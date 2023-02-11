import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation('aboutPage');

    return <div>{t('About page')}</div>;
}

export default AboutPage;
