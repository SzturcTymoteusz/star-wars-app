import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ResourceType } from '../../../types/game.types';
import { GameActionsFacade } from '../../../logic/game-actions/game-actions.facade';
import { GameData } from '../../../logic/game-data/game-data';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-resource-button-container',
  standalone: true,
  imports: [MatButtonToggleModule],
  templateUrl: './resource-button-container.component.html',
  styleUrl: './resource-button-container.component.scss',
})
export class ResourceButtonContainerComponent implements OnInit, OnDestroy {
  public gameFacade = inject(GameActionsFacade);
  public gameData = inject(GameData);

  public currentResource: ResourceType;
  public readonly ResourceType = ResourceType;

  private destroy = new Subject<void>();

  public ngOnInit() {
    this.gameData
      .resource()
      .pipe(takeUntil(this.destroy))
      .subscribe(resource => {
        this.currentResource = resource;
      });
  }

  public ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  public onToggleResource(resource: ResourceType) {
    this.gameFacade.changeResource(resource);
  }
}
