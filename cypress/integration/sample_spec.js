it('Visit /', () => {
  cy.visit('/');

  // cy.contains('Test node').click();
  //
  // cy.on('window:alert', str => expect(str).to.equal(undefined));
});

it('Visit / and click on About link', () => {
  cy.visit('/');
  cy.contains('About').click();
  cy.url().should('include', '/About');
});

it('Visit / and click on Wrong link, then redirect to /', () => {
  cy.visit('');
  cy.contains('Wrong').click();
  cy.url().should('include', '/');
});
