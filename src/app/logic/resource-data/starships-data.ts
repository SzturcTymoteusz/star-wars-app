import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { StarshipsBriefStore } from '../../data/resources/starships/starships-brief/starships-brief.store';
import { Starship, StarshipCard } from '../../types/resource/starships.types';
import { StarshipsFullStore } from '../../data/resources/starships/starships-full/starships-full.store';
import { ResourceBrief } from '../../types/resource/resource-http.types';
import { ResourceDataProvider } from './resource-data';

@Injectable({
  providedIn: 'root',
})
export class StarshipsData implements ResourceDataProvider<StarshipCard> {
  constructor(private store: Store) {}

  public briefCollection(): Observable<ResourceBrief[]> {
    return this.store.select(StarshipsBriefStore);
  }

  public fullEntityById(id: string): Observable<StarshipCard> {
    return this.store.select(StarshipsFullStore.ById<Starship>(id));
  }
}
