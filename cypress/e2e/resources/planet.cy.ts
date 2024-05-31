import { GamePageHarness } from '../../harness/game-page.harness';
import { ResourceButtonContainerHarness } from '../../harness/resource-button-container.harness';
import { PlayButtonContainerHarness } from '../../harness/play-button-container.harness';
import { PlayerContainerHarness } from '../../harness/player-container.harness';
import { PlanetCardHarness } from '../../harness/resources/planet-card.harness';

describe('Planet resource', () => {
  it('Play game', () => {
    let planet1Population: number;
    let planet2Population: number;

    cy.intercept('**/planets/**').as('planet');

    GamePageHarness.init();
    ResourceButtonContainerHarness.select('Planet');

    PlayButtonContainerHarness.play();
    GamePageHarness.isLoading();
    cy.wait('@planet').wait('@planet');
    GamePageHarness.stopLoading();

    cy.get('@planet.1')
      .its('response.body')
      .then(planet => {
        planet1Population = parseInt(planet.result.properties.population);
        PlanetCardHarness.properties(planet.result.properties);
      })
      .then(() => cy.get('@planet.2'))
      .its('response.body')
      .then(planet => {
        planet2Population = parseInt(planet.result.properties.population);
        PlanetCardHarness.properties(planet.result.properties);
      })
      .then(() => {
        PlayerContainerHarness.increment(planet1Population === planet2Population ? 0 : 1);
      });
  });
});
