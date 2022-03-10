/// <reference types="cypress" />

context('Cypress Axe', () => {
  it('cy.checkA11y', () => {
    cy.visit('http://localhost:3000');
    cy.get('main');
    cy.testAccessibility();
  });
});
