import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { GameManagerService } from '../../../logic/services/game-manager.service';
import { GameData } from '../../../logic/game-data/game-data';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-play-button-container',
  standalone: true,
  imports: [MatButton, AsyncPipe],
  templateUrl: './play-button-container.component.html',
  styleUrl: './play-button-container.component.scss',
})
export class PlayButtonContainerComponent {
  public gameManager = inject(GameManagerService);
  public gameData = inject(GameData);

  public play(): void {
    this.gameManager.play();
  }
}
