import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Game, PlayerType, ResourceType } from '../../types/game.types';
import { GameActions } from './game.actions';

@State<Game>({
  name: 'game',
  defaults: {
    ready: false,
    loading: false,
    resource: ResourceType.People,
    currentGame: null,
    [PlayerType.One]: {
      name: 'Player One',
      score: 0,
      type: PlayerType.One,
    },
    [PlayerType.Two]: {
      name: 'Player Two',
      score: 0,
      type: PlayerType.Two,
    },
  },
})
@Injectable()
export class GameStore {
  @Action(GameActions.Init)
  fetchCollection(ctx: StateContext<Game>) {
    ctx.patchState({ ready: true });
  }

  @Action(GameActions.StartLoading)
  startLoading(ctx: StateContext<Game>) {
    ctx.patchState({ loading: true });
  }

  @Action(GameActions.StopLoading)
  stopLoading(ctx: StateContext<Game>) {
    ctx.patchState({ loading: false });
  }

  @Action(GameActions.IncrementScore)
  incrementScore(ctx: StateContext<Game>, action: GameActions.IncrementScore) {
    const state = ctx.getState();
    const player = action.player;
    const newScore = state[player].score + 1;
    ctx.patchState({
      [player]: {
        ...state[player],
        score: newScore,
      },
    });
  }

  @Action(GameActions.ChangeResource)
  changeResource(ctx: StateContext<Game>, action: GameActions.ChangeResource) {
    ctx.patchState({ resource: action.resource });
  }

  @Action(GameActions.SetCurrentGameData)
  setPlayerResourceItemId(ctx: StateContext<Game>, action: GameActions.SetCurrentGameData) {
    ctx.patchState({
      currentGame: {
        resource: action.resource,
        resourceItemId: {
          [PlayerType.One]: action.playerOneResourceItemId,
          [PlayerType.Two]: action.playerTwoResourceItemId,
        },
        winner: action.winner,
      },
    });
  }

  @Selector()
  static ready(ctx: Game) {
    return ctx.ready;
  }

  @Selector()
  static loading(ctx: Game) {
    return ctx.loading;
  }

  @Selector()
  static playerOne(ctx: Game) {
    return ctx.playerOne;
  }

  @Selector()
  static playerTwo(ctx: Game) {
    return ctx.playerTwo;
  }

  @Selector()
  static resource(ctx: Game) {
    return ctx.resource;
  }

  @Selector()
  static currentGame(ctx: Game) {
    return ctx.currentGame;
  }
}
