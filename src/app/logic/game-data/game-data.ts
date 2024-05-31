import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { GameStore } from '../../data/game/game.store';
import { CurrentGame, Player, ResourceType } from '../../types/game.types';

@Injectable({
  providedIn: 'root',
})
export class GameData {
  public isReady$: Observable<boolean>;
  public isLoading$: Observable<boolean>;
  public resource$: Observable<ResourceType>;
  public playerOne$: Observable<Player>;
  public playerTwo$: Observable<Player>;
  public currentGame$: Observable<CurrentGame | null>;

  constructor(private store: Store) {
    this.isReady$ = this.store.select(GameStore.ready);
    this.isLoading$ = this.store.select(GameStore.loading);
    this.resource$ = this.store.select(GameStore.resource);
    this.playerOne$ = this.store.select(GameStore.playerOne);
    this.playerTwo$ = this.store.select(GameStore.playerTwo);
    this.playerTwo$ = this.store.select(GameStore.playerTwo);
    this.currentGame$ = this.store.select(GameStore.currentGame);
  }

  public resource(): Observable<ResourceType> {
    return this.store.select(GameStore.resource);
  }

  public playerOne(): Observable<Player> {
    return this.store.select(GameStore.playerOne);
  }

  public playerTwo(): Observable<Player> {
    return this.store.select(GameStore.playerTwo);
  }
}
