import { GamePageHarness } from '../../harness/game-page.harness';
import { ResourceButtonContainerHarness } from '../../harness/resource-button-container.harness';
import { PlayButtonContainerHarness } from '../../harness/play-button-container.harness';
import { PlayerContainerHarness } from '../../harness/player-container.harness';
import { StarshipCardHarness } from '../../harness/resources/starship-card.harness';

describe('Starship resource', () => {
  it('Play game', () => {
    let starship1Crew: number;
    let starship2Crew: number;

    cy.intercept('**/starships/**').as('starship');

    GamePageHarness.init();
    ResourceButtonContainerHarness.select('Starship');

    PlayButtonContainerHarness.play();
    GamePageHarness.isLoading();
    cy.wait('@starship').wait('@starship');
    GamePageHarness.stopLoading();

    cy.get('@starship.1')
      .its('response.body')
      .then(starship => {
        starship1Crew = parseInt(starship.result.properties.crew);
        StarshipCardHarness.properties(starship.result.properties);
      })
      .then(() => cy.get('@starship.2'))
      .its('response.body')
      .then(starship => {
        starship2Crew = parseInt(starship.result.properties.crew);
        StarshipCardHarness.properties(starship.result.properties);
      })
      .then(() => {
        PlayerContainerHarness.increment(starship1Crew === starship2Crew ? 0 : 1);
      });
  });
});
