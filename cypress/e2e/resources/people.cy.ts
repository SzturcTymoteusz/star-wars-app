import { GamePageHarness } from '../../harness/game-page.harness';
import { ResourceButtonContainerHarness } from '../../harness/resource-button-container.harness';
import { PlayButtonContainerHarness } from '../../harness/play-button-container.harness';
import { PeopleCardHarness } from '../../harness/resources/people-card.harness';
import { PlayerContainerHarness } from '../../harness/player-container.harness';

describe('People resource', () => {
  it('Play game', () => {
    let people1Mass: number;
    let people2Mass: number;

    cy.intercept('**/people/**').as('people');

    GamePageHarness.init();
    ResourceButtonContainerHarness.select('People');

    PlayButtonContainerHarness.play();
    GamePageHarness.isLoading();
    cy.wait('@people').wait('@people');
    GamePageHarness.stopLoading();

    cy.get('@people.1')
      .its('response.body')
      .then(people => {
        people1Mass = parseInt(people.result.properties.mass);
        PeopleCardHarness.properties(people.result.properties);
      })
      .then(() => cy.get('@people.2'))
      .its('response.body')
      .then(people => {
        people2Mass = parseInt(people.result.properties.mass);
        PeopleCardHarness.properties(people.result.properties);
      })
      .then(() => {
        PlayerContainerHarness.increment(people1Mass === people2Mass ? 0 : 1);
      });
  });
});
