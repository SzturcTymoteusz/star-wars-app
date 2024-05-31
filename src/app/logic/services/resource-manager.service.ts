import { Injectable } from '@angular/core';
import { FilmsData } from '../resource-data/films-data';
import { PeopleData } from '../resource-data/people-data';
import { PlanetsData } from '../resource-data/planets-data';
import { SpeciesData } from '../resource-data/species-data';
import { StarshipsData } from '../resource-data/starships-data';
import { VehiclesData } from '../resource-data/vehicles-data';
import { ResourceType } from '../../types/game.types';
import { FilmsActionsFacade } from '../resource-actions/films-actions.facade';
import { PeopleActionsFacade } from '../resource-actions/people-actions.facade';
import { PlanetsActionsFacade } from '../resource-actions/planets-actions.facade';
import { SpeciesActionsFacade } from '../resource-actions/species-actions.facade';
import { StarshipsActionsFacade } from '../resource-actions/starships-actions.facade';
import { VehiclesActionsFacade } from '../resource-actions/vehicles-actions.facade';

@Injectable({
  providedIn: 'root',
})
export class ResourceManagerService {
  constructor(
    private filmsData: FilmsData,
    private filmsFacade: FilmsActionsFacade,
    private peopleData: PeopleData,
    private peopleFacade: PeopleActionsFacade,
    private planetsData: PlanetsData,
    private planetsFacade: PlanetsActionsFacade,
    private speciesData: SpeciesData,
    private speciesFacade: SpeciesActionsFacade,
    private starshipsData: StarshipsData,
    private starshipsFacade: StarshipsActionsFacade,
    private vehiclesData: VehiclesData,
    private vehiclesFacade: VehiclesActionsFacade
  ) {}

  public getBriefCollection(resource: ResourceType) {
    const resources = {
      [ResourceType.Films]: this.filmsData,
      [ResourceType.People]: this.peopleData,
      [ResourceType.Planets]: this.planetsData,
      [ResourceType.Species]: this.speciesData,
      [ResourceType.Starships]: this.starshipsData,
      [ResourceType.Vehicles]: this.vehiclesData,
    };
    return resources[resource].briefCollection();
  }

  public fetchFullEntity(resource: ResourceType, id: string) {
    const resources = {
      [ResourceType.Films]: this.filmsFacade,
      [ResourceType.People]: this.peopleFacade,
      [ResourceType.Planets]: this.planetsFacade,
      [ResourceType.Species]: this.speciesFacade,
      [ResourceType.Starships]: this.starshipsFacade,
      [ResourceType.Vehicles]: this.vehiclesFacade,
    };
    return resources[resource].fetchFullOne(id);
  }

  public getFullEntityById(resource: ResourceType, id: string) {
    const resources = {
      [ResourceType.Films]: this.filmsData,
      [ResourceType.People]: this.peopleData,
      [ResourceType.Planets]: this.planetsData,
      [ResourceType.Species]: this.speciesData,
      [ResourceType.Starships]: this.starshipsData,
      [ResourceType.Vehicles]: this.vehiclesData,
    };
    return resources[resource].fullEntityById(id);
  }
}
