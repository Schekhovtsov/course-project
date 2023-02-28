// import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation('mainPage');

    return (
        <div>
            {t('Main page')}
        </div>
    );
}

export default MainPage;
