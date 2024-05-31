import { Injectable } from '@angular/core';
import { combineLatest, map, Observable, of, switchMap, take } from 'rxjs';
import { Store } from '@ngxs/store';
import { FilmsStore } from '../../data/resources/films/films.store';
import { PeopleBriefStore } from '../../data/resources/people/people-brief/people-brief.store';
import { PlanetsBriefStore } from '../../data/resources/planets/planets-brief/planets-brief.store';
import { StarshipsBriefStore } from '../../data/resources/starships/starships-brief/starships-brief.store';
import { VehiclesBriefStore } from '../../data/resources/vehicles/vehicles-brief/vehicles-brief.store';
import { SpeciesBriefStore } from '../../data/resources/species/species-brief/species-brief.store';
import { ResourceBrief } from '../../types/resource/resource-http.types';
import { ResourceDataProvider } from './resource-data';
import { Film, FilmCard } from '../../types/resource/films.types';

@Injectable({
  providedIn: 'root',
})
export class FilmsData implements ResourceDataProvider<FilmCard> {
  constructor(private store: Store) {}

  public briefCollection(): Observable<ResourceBrief[]> {
    return this.store.select(FilmsStore.Entities()).pipe(
      map(films =>
        films.map(film => {
          const uid = film.properties.url.split('/').slice(-1)[0];
          return {
            uid,
            name: film.properties.title,
            url: film.properties.url,
          };
        })
      )
    );
  }

  public fullEntityById(id: string): Observable<FilmCard> {
    return this.store.select(FilmsStore.ById<Film>(id)).pipe(
      switchMap(film => {
        const peopleIds = film.properties.characters.map(url => url.split('/').slice(-1)[0]);
        const planetIds = film.properties.planets.map(url => url.split('/').slice(-1)[0]);
        const starshipIds = film.properties.starships.map(url => url.split('/').slice(-1)[0]);
        const vehiclesIds = film.properties.vehicles.map(url => url.split('/').slice(-1)[0]);
        const speciesIds = film.properties.species.map(url => url.split('/').slice(-1)[0]);

        return combineLatest([
          this.store.select(PeopleBriefStore.ByIds<ResourceBrief>(peopleIds)),
          this.store.select(PlanetsBriefStore.ByIds<ResourceBrief>(planetIds)),
          this.store.select(StarshipsBriefStore.ByIds<ResourceBrief>(starshipIds)),
          this.store.select(VehiclesBriefStore.ByIds<ResourceBrief>(vehiclesIds)),
          this.store.select(SpeciesBriefStore.ByIds<ResourceBrief>(speciesIds)),
        ]).pipe(
          take(1),
          map(([people, planets, starships, vehicles, species]) => {
            return {
              ...film,
              properties: {
                ...film.properties,
                character_names: people.map(people => people.name),
                planet_names: planets.map(planet => planet.name),
                starship_names: starships.map(starship => starship.name),
                vehicle_names: vehicles.map(vehicle => vehicle.name),
                species_names: species.map(species => species.name),
              },
            };
          })
        );
      })
    );
  }
}
