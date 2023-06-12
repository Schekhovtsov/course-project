import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/Rating';

function AboutPage() {
    const { t } = useTranslation('aboutPage');

    return (
        <Page>
            {`${t('About page')}`}
            <RatingCard
                title={`${t('Rate the article')}`}
                feedbackTitle={`${t('Enjoyed')}`}
            />
        </Page>
    );
}

export default AboutPage;
