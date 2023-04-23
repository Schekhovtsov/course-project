import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page';

export const Page404 = () => {
    const { t } = useTranslation();
    return <Page>{t('Page not found')}</Page>;
};
