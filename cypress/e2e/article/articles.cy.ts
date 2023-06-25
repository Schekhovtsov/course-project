import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Список статей', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
        });
    });

    it('Список статей открывается, статьи подгружаются', () => {
        cy.get(selectByTestId('Article list')).should('exist');
        cy.get(selectByTestId('Article list item')).should(
            'have.length.greaterThan',
            1
        );
    });
});
