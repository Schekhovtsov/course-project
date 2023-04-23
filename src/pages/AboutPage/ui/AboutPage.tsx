import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page';

function AboutPage() {
    const { t } = useTranslation('aboutPage');

    return <Page>{t('About page')}</Page>;
}

export default AboutPage;
