import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = memo(() => {
    const { t } = useTranslation('Admin');

    return (
        <Page data-testid="Admin panel page">{`${t('Admin panel page')}`}</Page>
    );
});

export default AdminPanelPage;
