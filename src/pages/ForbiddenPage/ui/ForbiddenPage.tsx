import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

export const ForbiddenPage = () => {
    const { t } = useTranslation('Main page');

    return (
        <Page>
            <Text title={`${t('Forbidden')}`} />
        </Page>
    );
};
