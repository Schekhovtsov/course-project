/* eslint-disable no-unused-vars */
import { ArticleType } from '../../../src/entities/Article';

const defaultArticle = {
    userId: '1',
    title: 'How to use Jellyfin to stream movies, music, and more right from your hard drive',
    description:
        'We may earn revenue from the products available on this page and participate in affiliate programs',
    img: 'https://leonardo.osnova.io/97120a6a-7625-5424-b852-41b9bd4ffd3a/-/preview/2000/-/format/webp/',
    createdAt: '24.03.23',
    tags: ['Music'],
    blocks: [],
};

export const createArticle = (article?: ArticleType) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { authorization: 'blank' },
            body: article ?? defaultArticle,
        })
        .then(({ body }) => body);

export const removeArticle = (articleId: string) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { authorization: 'blank' },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: ArticleType): Chainable<ArticleType>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}

export {};
