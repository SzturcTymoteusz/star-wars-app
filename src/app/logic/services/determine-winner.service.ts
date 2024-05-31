import { inject, Injectable } from '@angular/core';
import { PlayerType, ResourceType } from '../../types/game.types';
import { combineLatest, map, Observable, take } from 'rxjs';
import { ResourceManagerService } from './resource-manager.service';
import { People } from '../../types/resource/people.types';
import { ResourceItem } from '../../types/resource/resource.types';
import { Planet } from '../../types/resource/planets.types';
import { Film } from '../../types/resource/films.types';
import { Species } from '../../types/resource/species.types';
import { Vehicle } from '../../types/resource/vehicles.types';
import { Starship } from '../../types/resource/starships.types';

@Injectable({
  providedIn: 'root',
})
export class DetermineWinnerService {
  private resourceManager = inject(ResourceManagerService);

  private gameResource: ResourceType;

  public execute(data: {
    gameResource: ResourceType;
    playerOneResourceItemId: string;
    playerTwoResourceItemId: string;
  }): Observable<PlayerType | null> {
    this.gameResource = data.gameResource;
    return combineLatest([
      this.resourceManager.getFullEntityById(this.gameResource, data.playerOneResourceItemId),
      this.resourceManager.getFullEntityById(this.gameResource, data.playerTwoResourceItemId),
    ]).pipe(
      take(1),
      map(([playerOneResourceItem, playerTwoResourceItem]) =>
        this.compareResources(playerOneResourceItem, playerTwoResourceItem)
      )
    );
  }

  private compareResources(
    resourceItemOne: ResourceItem,
    resourceItemTwo: ResourceItem
  ): PlayerType | null {
    const compareResourceFunctionsMap: Record<
      ResourceType,
      (resourceItemOne: ResourceItem, resourceItemTwo: ResourceItem) => PlayerType | null
    > = {
      [ResourceType.People]: (resourceItemOne: ResourceItem, resourceItemTwo: ResourceItem) =>
        this.comparePeople(<People>resourceItemOne, <People>resourceItemTwo),
      [ResourceType.Planets]: (resourceItemOne: ResourceItem, resourceItemTwo: ResourceItem) =>
        this.comparePlanets(<Planet>resourceItemOne, <Planet>resourceItemTwo),
      [ResourceType.Films]: (resourceItemOne: ResourceItem, resourceItemTwo: ResourceItem) =>
        this.compareFilms(<Film>resourceItemOne, <Film>resourceItemTwo),
      [ResourceType.Species]: (resourceItemOne: ResourceItem, resourceItemTwo: ResourceItem) =>
        this.compareSpecies(<Species>resourceItemOne, <Species>resourceItemTwo),
      [ResourceType.Vehicles]: (resourceItemOne: ResourceItem, resourceItemTwo: ResourceItem) =>
        this.compareVehicles(<Vehicle>resourceItemOne, <Vehicle>resourceItemTwo),
      [ResourceType.Starships]: (resourceItemOne: ResourceItem, resourceItemTwo: ResourceItem) =>
        this.compareStarships(<Starship>resourceItemOne, <Starship>resourceItemTwo),
    };
    return compareResourceFunctionsMap[this.gameResource](resourceItemOne, resourceItemTwo);
  }

  private comparePeople(peopleOne: People, peopleTwo: People): PlayerType | null {
    const peopleOneMass = peopleOne.properties.mass;
    const peopleTwoMass = peopleTwo.properties.mass;

    return this.compareNumericProperties(peopleOneMass, peopleTwoMass);
  }

  private comparePlanets(planetOne: Planet, planetTwo: Planet): PlayerType | null {
    const planetOnePopulation = planetOne.properties.population;
    const planetTwoPopulation = planetTwo.properties.population;

    return this.compareNumericProperties(planetOnePopulation, planetTwoPopulation);
  }

  private compareFilms(filmOne: Film, filmTwo: Film): PlayerType | null {
    const filmOneCharactersAmount = filmOne.properties.characters.length;
    const filmTwoCharactersAmount = filmTwo.properties.characters.length;

    return this.compareNumericProperties(filmOneCharactersAmount, filmTwoCharactersAmount);
  }

  private compareSpecies(speciesOne: Species, speciesTwo: Species): PlayerType | null {
    const speciesOneAverageHeight = speciesOne.properties.average_height;
    const speciesTwoAverageHeight = speciesTwo.properties.average_height;

    return this.compareNumericProperties(speciesOneAverageHeight, speciesTwoAverageHeight);
  }

  private compareVehicles(vehicleOne: Vehicle, vehicleTwo: Vehicle): PlayerType | null {
    const vehicleOneCrew = vehicleOne.properties.crew;
    const vehicleTwoCrew = vehicleTwo.properties.crew;

    return this.compareNumericProperties(vehicleOneCrew, vehicleTwoCrew);
  }

  private compareStarships(starshipOne: Starship, starshipTwo: Starship): PlayerType | null {
    const starshipOneCrew = starshipOne.properties.crew;
    const starshipTwoCrew = starshipTwo.properties.crew;

    return this.compareNumericProperties(starshipOneCrew, starshipTwoCrew);
  }

  private compareNumericProperties(
    propertyOne: string | number,
    propertyTwo: string | number
  ): PlayerType | null {
    const propertyOneValue = Number(propertyOne);
    const propertyTwoValue = Number(propertyTwo);

    if ((!propertyOneValue && !propertyTwoValue) || propertyOneValue === propertyTwoValue) {
      return null;
    }

    if (!propertyOneValue) {
      return PlayerType.Two;
    }

    if (!propertyTwoValue) {
      return PlayerType.One;
    }

    return propertyOneValue > propertyTwoValue ? PlayerType.One : PlayerType.Two;
  }
}
