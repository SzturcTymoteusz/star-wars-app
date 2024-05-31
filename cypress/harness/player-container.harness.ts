const selectors = {
  container: 'app-player-container',
  cardContainer: '.card-container',
  playerScore: '.player-details-score',
};

export class PlayerContainerHarness {
  public static emptyCard(player: string): void {
    cy.contains(selectors.container, player).within(() => {
      cy.get(selectors.cardContainer).should('not.exist');
    });
  }

  public static score(player: string, score: number): void {
    cy.contains(selectors.container, player).within(() => {
      cy.contains(selectors.playerScore, score);
    });
  }

  public static increment(score: number): void {
    cy.contains(selectors.playerScore, score);
  }
}
