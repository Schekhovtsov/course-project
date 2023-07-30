/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

function AboutPage() {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation('aboutPage');

    return (
        <Page data-testid="About page">
            <b>TO-DO:</b>
            <ul>
                <li>Починить иконки при старте через Vite</li>
                <li>Выполнить полную локализацию</li>
                <li>Описать весь проект на главной странице</li>
                <li>
                    Подправить скелетоны - добавить радиус (в некотороых местах)
                    и анимацию
                </li>
                <li>Добится положительных проверок github actions</li>
                <li>Опционально: обновить все версии библиотек</li>
                <li>Опционально: дизайн в сторибуке</li>
            </ul>
        </Page>
    );
}

export default AboutPage;
