import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page';

function MainPage() {
    const { t } = useTranslation('mainPage');

    return <Page>{t('Main page')}</Page>;
}

export default MainPage;
