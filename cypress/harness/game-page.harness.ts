const selectors = {
  spinner: 'app-spinner',
};

export class GamePageHarness {
  public static init(): void {
    cy.intercept('**/people**').as('people');
    cy.intercept('**/films**').as('films');
    cy.intercept('**/planets**').as('planets');
    cy.intercept('**/species**').as('species');
    cy.intercept('**/starships**').as('starships');
    cy.intercept('**/vehicles**').as('vehicles');

    cy.visit('/game');
    cy.wait('@people')
      .wait('@films')
      .wait('@planets')
      .wait('@species')
      .wait('@starships')
      .wait('@vehicles');
    GamePageHarness.stopLoading();
  }

  public static isLoading(): void {
    cy.get(selectors.spinner).should('exist');
  }

  public static stopLoading(): void {
    cy.get(selectors.spinner).should('not.exist');
  }
}
