import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { PeopleFullActions } from '../../data/resources/people/people-full/people-full.actions';
import { PeopleBriefActions } from '../../data/resources/people/people-brief/people-brief.actions';
import { ResourceActionsFacade } from './resource-actions.facade';

@Injectable({
  providedIn: 'root',
})
export class PeopleActionsFacade implements ResourceActionsFacade {
  constructor(private store: Store) {}

  public fetchBriefCollection() {
    return this.store.dispatch(new PeopleBriefActions.FetchCollection());
  }

  public fetchFullOne(id: string) {
    return this.store.dispatch(new PeopleFullActions.FetchOne(id));
  }
}
