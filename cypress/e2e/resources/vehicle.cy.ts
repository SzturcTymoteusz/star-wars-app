import { GamePageHarness } from '../../harness/game-page.harness';
import { ResourceButtonContainerHarness } from '../../harness/resource-button-container.harness';
import { PlayButtonContainerHarness } from '../../harness/play-button-container.harness';
import { PlayerContainerHarness } from '../../harness/player-container.harness';
import { VehicleCardHarness } from '../../harness/resources/vehicle-card.harness';

describe('Vehicle resource', () => {
  it('Play game', () => {
    let vehicle1Crew: number;
    let vehicle2Crew: number;

    cy.intercept('**/vehicles/**').as('vehicle');

    GamePageHarness.init();
    ResourceButtonContainerHarness.select('Vehicle');

    PlayButtonContainerHarness.play();
    GamePageHarness.isLoading();
    cy.wait('@vehicle').wait('@vehicle');
    GamePageHarness.stopLoading();

    cy.get('@vehicle.1')
      .its('response.body')
      .then(vehicle => {
        vehicle1Crew = parseInt(vehicle.result.properties.crew);
        VehicleCardHarness.properties(vehicle.result.properties);
      })
      .then(() => cy.get('@vehicle.2'))
      .its('response.body')
      .then(vehicle => {
        vehicle2Crew = parseInt(vehicle.result.properties.crew);
        VehicleCardHarness.properties(vehicle.result.properties);
      })
      .then(() => {
        PlayerContainerHarness.increment(vehicle1Crew === vehicle2Crew ? 0 : 1);
      });
  });
});
