import { useTranslation } from 'react-i18next';

export const Page404 = () => {
    const { t } = useTranslation();
    return <div>{t('Page not found')}</div>;
};
