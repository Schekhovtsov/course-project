import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/deprecated/Text';
import { Page } from '@/widgets/Page';

export const ForbiddenPage = () => {
    const { t } = useTranslation('Main page');

    return (
        <Page data-testid="Forbidden page">
            <Text title={`${t('Forbidden')}`} />
        </Page>
    );
};
