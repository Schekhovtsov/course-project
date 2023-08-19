/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

function AboutPage() {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation('aboutPage');

    return (
        <Page data-testid="About page">
            <Text
                title={`${t('Тут был TO-DO лист')}`}
                text={`${t('Но я сделал всё что хотел (или почти всё)')}`}
            />
        </Page>
    );
}

export default AboutPage;
