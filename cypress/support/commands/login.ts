import { LS_USER_KEY } from '../../../src/shared/constants/localStorage';

export const login = (
    username: string = 'testUser',
    password: string = 'testPassword'
) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(LS_USER_KEY, JSON.stringify(body));
    });
};
