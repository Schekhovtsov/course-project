import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

function AboutPage() {
    const { t } = useTranslation('aboutPage');

    return <Page>{`${t('About page')}`}</Page>;
}

export default AboutPage;
