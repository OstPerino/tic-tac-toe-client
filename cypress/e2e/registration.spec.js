import {
  firstPlayerCredentials,
} from '../fixtures/credentials';

describe('Registraion', () => {
  it('Registers', () => {
    cy.visit('/auth');
    cy.get('[data-cy=form-link-registration]').click();
  
    cy.get('[data-cy=form-input-username]').type(firstPlayerCredentials.username);
    cy.get('[data-cy=form-input-email]').type(firstPlayerCredentials.email);
    cy.get('[data-cy=form-input-password]').type(firstPlayerCredentials.password);
  
    cy.intercept('POST', '**/api/auth/register')
      .as('registerRequest');
  
    cy.get('[data-cy=form-btn-register]').click();
  
    cy.wait('@registerRequest')
      .should('have.nested.property', 'response.statusCode', 200);
  
    cy.get('@registerRequest')
      .its('request.body')
      .should('deep.equal', firstPlayerCredentials);
  
    cy.location('pathname').should('eq', '/auth');
  });
  
  it('Error - Username is already taken', () => {
    cy.register(firstPlayerCredentials);
  
    cy.visit('/registration');
  
    cy.get('[data-cy=form-input-username]').type(firstPlayerCredentials.username);
    cy.get('[data-cy=form-input-email]').type(firstPlayerCredentials.email);
    cy.get('[data-cy=form-input-password]').type(firstPlayerCredentials.password);
  
  
    cy.intercept('POST', '**/api/auth/register')
      .as('registerRequest');
  
    cy.get('[data-cy=form-btn-register]').click();
  
    cy.wait('@registerRequest')
      .should('have.nested.property', 'response.statusCode', 400);
  
    cy.contains('Пользователь с таким именем или email уже зарегестрирован')
      .should('be.visible');
  });
});
