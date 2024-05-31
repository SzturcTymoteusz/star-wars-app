import { Injectable } from '@angular/core';
import { PeopleActionsFacade } from './logic/resource-actions/people-actions.facade';
import { PlanetsActionsFacade } from './logic/resource-actions/planets-actions.facade';
import { FilmsActionsFacade } from './logic/resource-actions/films-actions.facade';
import { SpeciesActionsFacade } from './logic/resource-actions/species-actions.facade';
import { StarshipsActionsFacade } from './logic/resource-actions/starships-actions.facade';
import { VehiclesActionsFacade } from './logic/resource-actions/vehicles-actions.facade';
import { GameActionsFacade } from './logic/game-actions/game-actions.facade';
import { combineLatest, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(
    private peopleFacade: PeopleActionsFacade,
    private planetFacade: PlanetsActionsFacade,
    private filmsFacade: FilmsActionsFacade,
    private speciesFacade: SpeciesActionsFacade,
    private starshipsFacade: StarshipsActionsFacade,
    private vehiclesFacade: VehiclesActionsFacade,
    private gameFacade: GameActionsFacade
  ) {}

  public init() {
    combineLatest([
      this.peopleFacade.fetchBriefCollection(),
      this.planetFacade.fetchBriefCollection(),
      this.filmsFacade.fetchBriefCollection(),
      this.speciesFacade.fetchBriefCollection(),
      this.starshipsFacade.fetchBriefCollection(),
      this.vehiclesFacade.fetchBriefCollection(),
    ])
      .pipe(take(1))
      .subscribe(() => this.gameFacade.init());
  }
}
