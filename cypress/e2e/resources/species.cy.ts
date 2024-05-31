import { GamePageHarness } from '../../harness/game-page.harness';
import { ResourceButtonContainerHarness } from '../../harness/resource-button-container.harness';
import { PlayButtonContainerHarness } from '../../harness/play-button-container.harness';
import { PlayerContainerHarness } from '../../harness/player-container.harness';
import { SpeciesCardHarness } from '../../harness/resources/species-card.harness';

describe('Species resource', () => {
  it('Play game', () => {
    let species1AverageHeight: number;
    let species2AverageHeight: number;

    cy.intercept('**/species/**').as('species');

    GamePageHarness.init();
    ResourceButtonContainerHarness.select('Species');

    PlayButtonContainerHarness.play();
    GamePageHarness.isLoading();
    cy.wait('@species').wait('@species');
    GamePageHarness.stopLoading();

    cy.get('@species.1')
      .its('response.body')
      .then(species => {
        species1AverageHeight = parseInt(species.result.properties.average_height);
        SpeciesCardHarness.properties(species.result.properties);
      })
      .then(() => cy.get('@species.2'))
      .its('response.body')
      .then(species => {
        species2AverageHeight = parseInt(species.result.properties.average_height);
        SpeciesCardHarness.properties(species.result.properties);
      })
      .then(() => {
        PlayerContainerHarness.increment(species1AverageHeight === species2AverageHeight ? 0 : 1);
      });
  });
});
