describe('Test form on url /Form', () => {
  beforeEach(() => {
    cy.visit('/Form');
  });

  it('Full testing', () => {
    const expectedLogin = '123456';
    const expectedPassword = 'qwerty';

    cy.url().should('include', '/Form');

    cy.contains('Send').click();
    cy.contains('Обязательно для заполнения');

    cy.get('input[name="login"]').click();
    cy.get('input[name="login"]').type('4444');
    cy.contains('Минимальная длина поля 5 символов');

    cy.get('input[name="login"]').clear();
    cy.contains('Обязательно для заполнения');

    cy.get('input[name="login"]').type(expectedLogin);

    cy.get('input[name="password"]').click();
    cy.get('input[name="password"]').type('1234');
    cy.contains('Минимальная длина поля 5 символов');

    cy.get('input[name="password"]').clear();
    cy.contains('Обязательно для заполнения');

    cy.get('input[name="password"]').type('qwertyuiopas');
    cy.contains('Максимальная длина поля 10 символов');

    cy.get('input[name="password"]').clear();
    cy.get('input[name="password"]').type(expectedPassword);

    cy.contains('Send').click();

    cy.contains('Your state:');
    cy.contains(`login: ${expectedLogin}`);
    cy.contains(`password: ${expectedPassword}`);
  });
});
