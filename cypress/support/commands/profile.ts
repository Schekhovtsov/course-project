/* eslint-disable no-unused-vars */

export const updateProfile = (firstname: string) => {
    cy.getByTestId('ProfilePageHeader.EditButton').click();
    cy.getByTestId('EditableProfileCard.FirstnameInput')
        .clear()
        .type(firstname);
    cy.getByTestId('ProfilePageHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) =>
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { authorization: 'blank' },
        body: {
            id: '3',
            firstName: 'Test',
            lastName: 'Test',
            city: '',
            role: 'user',
            avatar: 'https://i.pinimg.com/236x/25/d9/76/25d976c6a7bca73f372f67adb4c14f80.jpg',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}

export {};
