import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Список статей', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
        });
    });

    it.skip('Список статей открывается, статьи подгружаются', () => {
        cy.get(selectByTestId('Article list')).should('exist');
        cy.get(selectByTestId('Article list item')).should('have.length', 1);
    });

    it('Список статей открывается, статьи подгружаются (на стабах/фикстурах)', () => {
        cy.intercept('GET', '**/articles?', { fixture: 'articles.json' });
        cy.get(selectByTestId('Article list')).should('exist');
        cy.get(selectByTestId('Article list item')).should('have.length', 1);
    });
});
