import { Component, inject } from '@angular/core';
import { PlayerContainerComponent } from '../../containers/player-container/player-container.component';
import { GameActionsFacade } from '../../../logic/game-actions/game-actions.facade';
import { ResourceType } from '../../../types/game.types';
import { ResourceButtonContainerComponent } from '../../containers/resource-button-container/resource-button-container.component';
import { GameData } from '../../../logic/game-data/game-data';
import { AsyncPipe } from '@angular/common';
import { PlayButtonContainerComponent } from '../../containers/play-button-container/play-button-container.component';
import { SpinnerComponent } from '../../spinner/spinner.component';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [
    SpinnerComponent,
    ResourceButtonContainerComponent,
    PlayerContainerComponent,
    PlayButtonContainerComponent,
    AsyncPipe,
  ],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss',
})
export class GamePageComponent {
  public gameData = inject(GameData);
}
