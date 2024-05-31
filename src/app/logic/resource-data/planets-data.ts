import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { PlanetsBriefStore } from '../../data/resources/planets/planets-brief/planets-brief.store';
import { PlanetsFullStore } from '../../data/resources/planets/planets-full/planets-full.store';
import { ResourceBrief } from '../../types/resource/resource-http.types';
import { Planet, PlanetCard } from '../../types/resource/planets.types';
import { ResourceDataProvider } from './resource-data';

@Injectable({
  providedIn: 'root',
})
export class PlanetsData implements ResourceDataProvider<PlanetCard> {
  constructor(private store: Store) {}

  public briefCollection(): Observable<ResourceBrief[]> {
    return this.store.select(PlanetsBriefStore);
  }

  public fullEntityById(id: string): Observable<PlanetCard> {
    return this.store.select(PlanetsFullStore.ById<Planet>(id));
  }
}
