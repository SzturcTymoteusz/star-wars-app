import { Injectable } from '@angular/core';
import { combineLatest, map, Observable, switchMap, take } from 'rxjs';
import { Store } from '@ngxs/store';
import { Species, SpeciesCard } from '../../types/resource/species.types';
import { SpeciesBriefStore } from '../../data/resources/species/species-brief/species-brief.store';
import { SpeciesFullStore } from '../../data/resources/species/species-full/species-full.store';
import { PeopleBriefStore } from '../../data/resources/people/people-brief/people-brief.store';
import { PlanetsBriefStore } from '../../data/resources/planets/planets-brief/planets-brief.store';
import { ResourceBrief } from '../../types/resource/resource-http.types';
import { ResourceDataProvider } from './resource-data';

@Injectable({
  providedIn: 'root',
})
export class SpeciesData implements ResourceDataProvider<SpeciesCard> {
  constructor(private store: Store) {}

  public briefCollection(): Observable<ResourceBrief[]> {
    return this.store.select(SpeciesBriefStore);
  }

  public fullEntityById(id: string): Observable<SpeciesCard> {
    return this.store.select(SpeciesFullStore.ById<Species>(id)).pipe(
      switchMap(species => {
        const peopleIds = species.properties.people.map(url => url.split('/').slice(-1)[0]);
        const planetId = species.properties.homeworld.split('/').slice(-1)[0];

        return combineLatest([
          this.store.select(PeopleBriefStore.ByIds<ResourceBrief>(peopleIds)),
          this.store.select(PlanetsBriefStore.ById<ResourceBrief>(planetId)),
        ]).pipe(
          take(1),
          map(([people, planet]) => {
            return {
              ...species,
              properties: {
                ...species.properties,
                people_names: people.map(people => people.name),
                homeworld_name: planet.name,
              },
            };
          })
        );
      })
    );
  }
}
