/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare namespace Cypress {
  interface Chainable<Subject = any> {
    register(credentials: any): Chainable<void>,
    login(credentials: any): Chainable<void>,
    createGame(): Chainable<void>,
    useSession(credentials: any): Chainable<void>,
    joinGame(gameId: Number): Chainable<void>,
    getGameCell(coordinates: [Number, Number]): Chainable<void>,
  }
}

Cypress.Commands.add('register', (credentials) => {
  cy.request('POST', Cypress.env('apiBaseUrl') + '/auth/register', credentials)
    .should('have.property', 'status', 200);
});

Cypress.Commands.add('login', (credentials) => {
  cy.request('POST', Cypress.env('apiBaseUrl') + '/auth/login', credentials)
    .as('postRequest');

  cy.get('@postRequest')
    .should('have.property', 'status', 200)
  
  cy.get('@postRequest')
    .its('body.token')
    .then((token) => {
      cy.window()
        .its('localStorage')
        .invoke('setItem', 'token', token);
    });
});

Cypress.Commands.add('createGame', () => {
  cy.window()
    .its('localStorage')
    .invoke('getItem', 'token')
    .then((token) => {
      cy.request({
        method: 'POST',
        url: Cypress.env('apiBaseUrl') + '/game/create-game',
        headers: {
          Authorization: 'Bearer_' + token,
        }
      })
      .should('have.property', 'status', 200);
    });
});

Cypress.Commands.add('useSession', (credentials) => {
  cy.session(credentials, () => {
    cy.register(credentials);
    cy.login(credentials);
    cy.visit('/main');
    cy.location('pathname')
      .should('eq', '/main');
  });
})

Cypress.Commands.add('joinGame', (gameId) => {
  cy.window()
  .its('localStorage')
  .invoke('getItem', 'token')
  .then((token) => {
    cy.request({
      method: 'POST',
      url: Cypress.env('apiBaseUrl') + '/game/join-game/' + gameId,
      headers: {
        Authorization: 'Bearer_' + token,
      }
    })
    .should('have.property', 'status', 200);
  });
});

Cypress.Commands.add('getGameCell', ([rowIndex, columnIndex]) => {
  cy.get('[data-cy=game-grid]')
    .find(`[data-cy=cell-${rowIndex}-${columnIndex}]`)
});
