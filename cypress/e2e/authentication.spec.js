import {
  firstPlayerCredentials,
} from '../fixtures/credentials';

describe('Authentication', () => {
  it('Authenticates', () => {
    cy.register(firstPlayerCredentials);
  
    cy.visit('/auth');
  
    cy.get('[data-cy=form-input-username]').type(firstPlayerCredentials.username);
    cy.get('[data-cy=form-input-password]').type(firstPlayerCredentials.password);
  
    cy.get('[data-cy=form-btn-login]').click();
  
    cy.location('pathname').should('eq', '/main');
  });

  it('Error - Wrong username or password', () => {
    cy.visit('/auth');
  
    cy.get('[data-cy=form-input-username]').type(firstPlayerCredentials.username);
    cy.get('[data-cy=form-input-password]').type(firstPlayerCredentials.password);
  
    cy.get('[data-cy=form-btn-login]').click();
  
    cy.contains('Возможно неверный логин или пароль')
      .should('be.visible');
  });
});