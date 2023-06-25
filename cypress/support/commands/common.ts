/* eslint-disable no-unused-vars */
import { User } from '../../../src/entities/User/index';
import { LS_USER_KEY } from '../../../src/shared/constants/localStorage';
import { selectByTestId } from '../../helpers/selectByTestId';

export const login = (username: string = 'Test', password: string = 'Test') =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/login',
            body: {
                username,
                password,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(LS_USER_KEY, JSON.stringify(body));
            return body;
        });

export const getByTestId = (testId: string) => {
    cy.get(selectByTestId(testId));
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>;
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}

export {};
