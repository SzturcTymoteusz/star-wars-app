import { GamePageHarness } from '../../harness/game-page.harness';
import { ResourceButtonContainerHarness } from '../../harness/resource-button-container.harness';
import { PlayButtonContainerHarness } from '../../harness/play-button-container.harness';
import { PlayerContainerHarness } from '../../harness/player-container.harness';
import { FilmCardHarness } from '../../harness/resources/film-card.harness';

describe('Film resource', () => {
  it('Play game', () => {
    let film1Characters: number;
    let film2Characters: number;

    cy.intercept('**/films/**').as('film');

    GamePageHarness.init();
    ResourceButtonContainerHarness.select('Film');

    PlayButtonContainerHarness.play();
    GamePageHarness.isLoading();
    cy.wait('@film').wait('@film');
    GamePageHarness.stopLoading();

    cy.get('@film.1')
      .its('response.body')
      .then(film => {
        film1Characters = parseInt(film.result.properties.characters.length);
        FilmCardHarness.properties(film.result.properties);
      })
      .then(() => cy.get('@film.2'))
      .its('response.body')
      .then(film => {
        film2Characters = parseInt(film.result.properties.characters.length);
        FilmCardHarness.properties(film.result.properties);
      })
      .then(() => {
        PlayerContainerHarness.increment(film1Characters === film2Characters ? 0 : 1);
      });
  });
});
