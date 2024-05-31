import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { FilmsActions } from '../../data/resources/films/films.actions';
import { ResourceActionsFacade } from './resource-actions.facade';

@Injectable({
  providedIn: 'root',
})
export class FilmsActionsFacade implements ResourceActionsFacade {
  constructor(private store: Store) {}

  public fetchBriefCollection() {
    return this.store.dispatch(new FilmsActions.FetchCollection());
  }

  public fetchFullOne(id: string) {
    return this.store.dispatch(new FilmsActions.FetchOne(id));
  }
}
