let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('profile');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });

    it('Успешная загрузка профиля', () => {
        cy.getByTestId('EditableProfileCard.FirstnameInput').should(
            'have.value',
            'Test'
        );
    });

    it('Редактирование профиля', () => {
        const name = 'New firstname';
        cy.updateProfile(name);
        cy.getByTestId('EditableProfileCard.FirstnameInput').should(
            'have.value',
            name
        );
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });
});
