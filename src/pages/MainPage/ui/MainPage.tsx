/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

function MainPage() {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation('mainPage');

    return (
        <Page data-testid="Main page">
            TO-DO:
            <br />
            <br />
            <ul>
                <li><del>В features растасовать всё по папкам</del></li>
                <li><del>Подправить окно подгрузки формы авторизации</del></li>
                <li>Просмотреть storybook. Добавить кейсов</li>
                <li>Починить иконки при старте через Vite</li>
                <li><del>Заменить реализацию редактирования профиля</del></li>
                <li>Проверить весь функционал фильтрации статей</li>
                <li>Выполнить полную локализацию</li>
                <li>В статьях починить подгрузку в режиме Grid/Tile</li>
                <li>Проверить логику переключеният тем. Глючит</li>
                <li>Сделать дизайн лоадера при первичной загрузке сайта</li>
                <li>Описать весь проект на главной странице</li>
                <li>Починить тему AppLoaderLayout</li>
                <li>Опционально: обновить все версии библиотек</li>
                <li>Опционально: прокрутка не в контейнере а на странице</li>
            </ul>
        </Page>
    );
}

export default MainPage;
