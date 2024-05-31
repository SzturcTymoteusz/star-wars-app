import { PlayerType, ResourceType } from '../../types/game.types';
import { PeopleCardComponent } from '../../components/resource-cards/people-card/people-card.component';
import { PlanetCardComponent } from '../../components/resource-cards/planet-card/planet-card.component';
import { FilmCardComponent } from '../../components/resource-cards/film-card/film-card.component';
import { SpeciesCardComponent } from '../../components/resource-cards/species-card/species-card.component';
import { VehicleCardComponent } from '../../components/resource-cards/vehicle-card/vehicle-card.component';
import { StarshipCardComponent } from '../../components/resource-cards/starship-card/starship-card.component';
import { inject, Injectable } from '@angular/core';
import { combineLatest, filter, map, of, switchMap, tap } from 'rxjs';
import { ResourceManagerService } from './resource-manager.service';
import { GameData } from '../game-data/game-data';

@Injectable({ providedIn: 'root' })
export class ResourceCardDataProviderService {
  private readonly resourceComponentsMap = {
    [ResourceType.People]: PeopleCardComponent,
    [ResourceType.Planets]: PlanetCardComponent,
    [ResourceType.Films]: FilmCardComponent,
    [ResourceType.Species]: SpeciesCardComponent,
    [ResourceType.Vehicles]: VehicleCardComponent,
    [ResourceType.Starships]: StarshipCardComponent,
  };

  private resourceManager = inject(ResourceManagerService);
  private gameData = inject(GameData);

  private currentGameResource: ResourceType;

  public data(player: PlayerType) {
    return this.gameData.currentGame$.pipe(
      filter(currentGame => !!currentGame),
      tap(currentGame => (this.currentGameResource = currentGame!.resource)),
      switchMap(currentGame =>
        combineLatest([
          this.resourceManager.getFullEntityById(
            currentGame!.resource,
            currentGame!.resourceItemId[player]
          ),
          of(currentGame!.winner === player),
          this.gameData.isLoading$,
        ])
      ),
      map(([resource, isWinner, isLoading]) => {
        return {
          component: this.resourceComponentsMap[this.currentGameResource],
          inputs: { [this.currentGameResource]: resource },
          showWinner: isWinner && !isLoading,
        };
      })
    );
  }
}
