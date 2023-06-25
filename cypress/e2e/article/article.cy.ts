import { selectByTestId } from 'cypress/helpers/selectByTestId';

let currentArticleId = '';

describe('Взаимодействие со статьёй', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${currentArticleId}`);
        });
    });

    after(() => {
        cy.removeArticle(currentArticleId);
    });

    it('Статья открывается', () => {
        cy.get(selectByTestId('Article')).should('exist');
    });

    // it('Комментарий отправляется', () => {
    //     cy.get(selectByTestId('Article')).should('exist');
    //     cy.get(selectByTestId('AddCommentForm')).scrollIntoView();
    //     cy.addComment('Text');
    //     cy.get(selectByTestId('CommentCard.Content')).should('exist');
    // });

    it('Рейтинг ставится:', () => {
        cy.get(selectByTestId('RatingCard')).should('exist').scrollIntoView();
        cy.setRate(5, 'feed');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
