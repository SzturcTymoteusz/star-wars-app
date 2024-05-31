import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { StarshipsBriefActions } from '../../data/resources/starships/starships-brief/starships-brief.actions';
import { StarshipsFullActions } from '../../data/resources/starships/starships-full/starships-full.actions';
import { ResourceActionsFacade } from './resource-actions.facade';

@Injectable({
  providedIn: 'root',
})
export class StarshipsActionsFacade implements ResourceActionsFacade {
  constructor(private store: Store) {}

  public fetchBriefCollection() {
    return this.store.dispatch(new StarshipsBriefActions.FetchCollection());
  }

  public fetchFullOne(uid: string) {
    return this.store.dispatch(new StarshipsFullActions.FetchOne(uid));
  }
}
