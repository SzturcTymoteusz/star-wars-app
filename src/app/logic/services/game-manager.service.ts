import { inject, Injectable } from '@angular/core';
import { combineLatest, switchMap, take, tap } from 'rxjs';
import { GameActionsFacade } from '../game-actions/game-actions.facade';
import { PlayerType, ResourceType } from '../../types/game.types';
import { GameData } from '../game-data/game-data';
import { ResourceManagerService } from './resource-manager.service';
import { DetermineWinnerService } from './determine-winner.service';

@Injectable({
  providedIn: 'root',
})
export class GameManagerService {
  private gameResource: ResourceType;
  private playerOneResourceItemId: string;
  private playerTwoResourceItemId: string;
  private winner: PlayerType | null;

  private gameFacade = inject(GameActionsFacade);
  private gameData = inject(GameData);
  private resourceManager = inject(ResourceManagerService);
  private determineWinner = inject(DetermineWinnerService);

  public play(): void {
    this.setData()
      .pipe(
        switchMap(() => this.drawResourceItemIds()),
        switchMap(() => this.fetchResourceItems()),
        switchMap(() => this.determineGameWinner()),
        switchMap(() => this.setCurrentGameData())
      )
      .subscribe();
  }

  private setData() {
    return this.gameData.resource$.pipe(
      take(1),
      tap(resource => {
        this.gameResource = resource;
      })
    );
  }

  private drawResourceItemIds() {
    return this.gameFacade.startLoading().pipe(
      switchMap(() => this.resourceManager.getBriefCollection(this.gameResource)),
      take(1),
      tap(resourceItems => {
        const itemsAmount = resourceItems.length;
        const firstItemIndex = this.drawResourceItemIndex(itemsAmount);
        const secondItemIndex = this.drawResourceItemIndex(itemsAmount, firstItemIndex);

        this.playerOneResourceItemId = resourceItems[firstItemIndex].uid;
        this.playerTwoResourceItemId = resourceItems[secondItemIndex].uid;
      })
    );
  }

  private drawResourceItemIndex(amount: number, previousIndex?: number): number {
    const index = Math.floor(Math.random() * amount);
    if (index === previousIndex) {
      return this.drawResourceItemIndex(amount, previousIndex);
    }
    return index;
  }

  private fetchResourceItems() {
    return combineLatest([
      this.resourceManager.fetchFullEntity(this.gameResource, this.playerOneResourceItemId),
      this.resourceManager.fetchFullEntity(this.gameResource, this.playerTwoResourceItemId),
    ]);
  }

  private determineGameWinner() {
    return this.determineWinner
      .execute({
        gameResource: this.gameResource,
        playerOneResourceItemId: this.playerOneResourceItemId,
        playerTwoResourceItemId: this.playerTwoResourceItemId,
      })
      .pipe(tap(winner => (this.winner = winner)));
  }

  private setCurrentGameData() {
    return combineLatest([
      ...(this.winner ? [this.gameFacade.incrementScore(this.winner)] : []),
      this.gameFacade.setGameData({
        resource: this.gameResource,
        playerOneResourceItemId: this.playerOneResourceItemId,
        playerTwoResourceItemId: this.playerTwoResourceItemId,
        winner: this.winner,
      }),
    ]).pipe(switchMap(() => this.gameFacade.stopLoading()));
  }
}
