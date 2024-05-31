import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { GameActions } from '../../data/game/game.actions';
import { PlayerType, ResourceType } from '../../types/game.types';

@Injectable({
  providedIn: 'root',
})
export class GameActionsFacade {
  constructor(private store: Store) {}

  public init() {
    return this.store.dispatch(new GameActions.Init());
  }

  public startLoading() {
    return this.store.dispatch(new GameActions.StartLoading());
  }

  public stopLoading() {
    return this.store.dispatch(new GameActions.StopLoading());
  }

  public incrementScore(player: PlayerType) {
    return this.store.dispatch(new GameActions.IncrementScore(player));
  }

  public setGameData(data: {
    resource: ResourceType;
    playerOneResourceItemId: string;
    playerTwoResourceItemId: string;
    winner: PlayerType | null;
  }) {
    return this.store.dispatch(
      new GameActions.SetCurrentGameData(
        data.resource,
        data.playerOneResourceItemId,
        data.playerTwoResourceItemId,
        data.winner
      )
    );
  }

  public changeResource(resource: ResourceType) {
    return this.store.dispatch(new GameActions.ChangeResource(resource));
  }
}
