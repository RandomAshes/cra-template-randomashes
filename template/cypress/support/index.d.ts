declare namespace Cypress {
  interface Chainable {
    testAccessibility(): Chainable<Element>;
  }
}
