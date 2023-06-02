import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

function MainPage() {
    const { t } = useTranslation('mainPage');

    return <Page>{`${t('Main page')}`}</Page>;
}

export default MainPage;
