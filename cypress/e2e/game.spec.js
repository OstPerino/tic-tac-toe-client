import {
  firstPlayerCredentials,
  secondPlayerCredentials
} from '../fixtures/credentials';

describe('Game', () => {

  it('Creates game', () => {
    cy.register(firstPlayerCredentials);
    cy.login(firstPlayerCredentials);
  
    cy.visit('/main');
    
    cy.get('[data-cy=btn-create-game]').click();
  
    cy.reload();
    cy.get('[data-cy=list-open-games]')
      .find('.list-item')
      .should('have.length', 1)
  });
  
  it('Joins game', () => {
    cy.register(firstPlayerCredentials);
    cy.login(firstPlayerCredentials);
    cy.createGame()
  
    cy.visit('/main');
    cy.get('[data-cy=list-open-games]')
      .find('[data-cy=btn-join]')
      .first()
      .click();
  
    cy.get('[data-cy=game-grid]')
      .should('be.visible');
  });
  
  it('Plays game', () => {
    const gameId = 1;
  
    cy.useSession(firstPlayerCredentials);
    cy.createGame();
  
    cy.visit('/game/1');
  
    cy.useSession(secondPlayerCredentials);
  
    cy.joinGame(1);
    cy.visit('/game/' + gameId);
  
    cy.get('[data-cy=player-sign-cross]').click();
  
    cy.useSession(firstPlayerCredentials);
    cy.visit('/game/' + gameId);
    cy.get('[data-cy=player-sign-circle]').click();
  
    const players = [
      firstPlayerCredentials,
      secondPlayerCredentials,
    ];
  
    const moves = [
      [0, 0],
      [1, 1],
      [0, 1],
      [0, 2],
      [2, 0],
      [1, 0],
      [2, 1],
      [1, 2],
    ];
  
    moves.forEach((move, index) => {
      cy.useSession(players[index % 2]);
      cy.visit('/game/' + gameId);
      cy.getGameCell(move)
        .click()
        .invoke('text')
        .should('not.be.empty');
    });
  
    cy.reload();
  
    cy.contains('[data-cy=winner]', 'Winner is 2');
  });
  
  it('Shows your games', () => {
    cy.useSession(firstPlayerCredentials);
    cy.createGame();
  
    cy.visit('/main');
    
    cy.get('[data-cy=link-my-games]')
      .click();
  
    cy.get('[data-cy=list-my-games]')
      .find('.list-item')
      .should('have.length', 1)
      .contains(firstPlayerCredentials.username);
  });
  
  it('Shows leaders', () => {
    cy.useSession(firstPlayerCredentials);
    cy.visit('/main');
    
    cy.get('[data-cy=link-leaders]')
      .click();
  
    cy.get('[data-cy=list-leaders]')
      .find('.leaderboard-item')
      .should('have.length', 1)
      .contains(firstPlayerCredentials.username);
  });
});
