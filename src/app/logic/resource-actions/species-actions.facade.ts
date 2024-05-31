import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { SpeciesBriefActions } from '../../data/resources/species/species-brief/species-brief.actions';
import { SpeciesFullActions } from '../../data/resources/species/species-full/species-full.actions';
import { ResourceActionsFacade } from './resource-actions.facade';

@Injectable({
  providedIn: 'root',
})
export class SpeciesActionsFacade implements ResourceActionsFacade {
  constructor(private store: Store) {}

  public fetchBriefCollection() {
    return this.store.dispatch(new SpeciesBriefActions.FetchCollection());
  }

  public fetchFullOne(uid: string) {
    return this.store.dispatch(new SpeciesFullActions.FetchOne(uid));
  }
}
