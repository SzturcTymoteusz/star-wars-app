import { GamePageHarness } from '../harness/game-page.harness';
import { ResourceButtonContainerHarness } from '../harness/resource-button-container.harness';
import { PlayerContainerHarness } from '../harness/player-container.harness';

describe('Initial state', () => {
  it('Initial state', () => {
    GamePageHarness.init();
    PlayerContainerHarness.emptyCard('Player One');
    PlayerContainerHarness.emptyCard('Player Two');
    PlayerContainerHarness.score('Player One', 0);
    PlayerContainerHarness.score('Player Two', 0);
    ResourceButtonContainerHarness.isSelected('People');
  });
});
