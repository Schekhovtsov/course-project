import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export const Page404 = () => {
    const { t } = useTranslation();
    return <Page data-testid="404">{`${t('Page not found')}`}</Page>;
};
