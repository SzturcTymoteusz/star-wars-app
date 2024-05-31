import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { PlanetsBriefActions } from '../../data/resources/planets/planets-brief/planets-brief.actions';
import { PlanetsFullActions } from '../../data/resources/planets/planets-full/planets-full.actions';
import { ResourceActionsFacade } from './resource-actions.facade';

@Injectable({
  providedIn: 'root',
})
export class PlanetsActionsFacade implements ResourceActionsFacade {
  constructor(private store: Store) {}

  public fetchBriefCollection() {
    return this.store.dispatch(new PlanetsBriefActions.FetchCollection());
  }

  public fetchFullOne(uid: string) {
    return this.store.dispatch(new PlanetsFullActions.FetchOne(uid));
  }
}
