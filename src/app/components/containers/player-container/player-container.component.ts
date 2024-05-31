import { Component, inject, Input } from '@angular/core';
import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { Player } from '../../../types/game.types';
import { ResourceCardDataProviderService } from '../../../logic/services/resource-card-data-provider.service';

@Component({
  selector: 'app-player-container',
  standalone: true,
  imports: [NgComponentOutlet, AsyncPipe],
  templateUrl: './player-container.component.html',
  styleUrl: './player-container.component.scss',
})
export class PlayerContainerComponent {
  @Input() public player: Player;

  public resourceCardDataProvider = inject(ResourceCardDataProviderService);
}
