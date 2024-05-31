import { Injectable } from '@angular/core';
import { PeopleBriefStore } from '../../data/resources/people/people-brief/people-brief.store';
import { filter, map, Observable, switchMap, take } from 'rxjs';
import { Store } from '@ngxs/store';
import { PeopleFullStore } from '../../data/resources/people/people-full/people-full.store';
import { PlanetsBriefStore } from '../../data/resources/planets/planets-brief/planets-brief.store';
import { ResourceBrief } from '../../types/resource/resource-http.types';
import { People, PeopleCard } from '../../types/resource/people.types';
import { ResourceDataProvider } from './resource-data';

@Injectable({
  providedIn: 'root',
})
export class PeopleData implements ResourceDataProvider<People> {
  constructor(private store: Store) {}

  public briefCollection(): Observable<ResourceBrief[]> {
    return this.store.select(PeopleBriefStore);
  }

  public fullEntityById(uid: string): Observable<PeopleCard> {
    return this.store.select(PeopleFullStore.ById<People>(uid)).pipe(
      filter(people => !!people),
      switchMap(people => {
        const planetUid = people.properties.homeworld.split('/').slice(-1)[0];
        return this.store.select(PlanetsBriefStore.ById<ResourceBrief>(planetUid)).pipe(
          take(1),
          map(planet => ({
            ...people,
            properties: {
              ...people.properties,
              homeworld_name: planet.name,
            },
          }))
        );
      })
    );
  }
}
