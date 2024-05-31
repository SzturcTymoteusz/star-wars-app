import { PlayerType, ResourceType } from '../../types/game.types';

export namespace GameActions {
  export class Init {
    static readonly type = '[Game] Init';
  }

  export class StartLoading {
    static readonly type = '[Game] Start loading';
  }

  export class StopLoading {
    static readonly type = '[Game] Stop loading';
  }

  export class IncrementScore {
    static readonly type = '[Game] Increment score';
    constructor(public player: PlayerType) {}
  }

  export class ChangeResource {
    static readonly type = '[Game] Change resource';
    constructor(public resource: ResourceType) {}
  }

  export class SetCurrentGameData {
    static readonly type = '[Game] Set current game data';
    constructor(
      public resource: ResourceType,
      public playerOneResourceItemId: string,
      public playerTwoResourceItemId: string,
      public winner: PlayerType | null
    ) {}
  }
}
