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
                <li>В features растасовать всё по папкам</li>
                <li>Подправить окно подгрузки формы авторизации</li>
                <li>Просмотреть storybook. Добавить кейсов</li>
                <li>Починить иконки при старте через Vite</li>
                <li>Заменить реализацию редактирования профиля</li>
                <li>Проверить весь функционал фильтрации статей</li>
                <li>Выполнить полную локализацию</li>
                <li>
                    Реализовать удаление папки кэша node modules через скрипт
                </li>
                <li>Проверить логику переключеният тем. Глючит</li>
                <li>Сделать дизайн лоадера при первичной загрузке сайта</li>
                <li>Описать весь проект на главной странице</li>
                <li>Опционально: обновить все версии библиотек</li>
            </ul>
        </Page>
    );
}

export default MainPage;
