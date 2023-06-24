import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Роутинг', () => {
    describe('Пользователь не авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('Main page')).should('exist');
        });

        it('Пользователь открывает страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('Main page')).should('exist');
        });

        it('Пользователь открывает несуществующий маршрут', () => {
            cy.visit('/abrakadabra');
            cy.get(selectByTestId('404')).should('exist');
        });
    });

    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('Admin', 'Admin');
        });

        it('Пользователь открывает страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('Profile page')).should('exist');
        });

        it('Пользователь переходит к списку статей', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('Articles page')).should('exist');
        });
    });
});
