import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { VehiclesBriefActions } from '../../data/resources/vehicles/vehicles-brief/vehicles-brief.actions';
import { VehiclesFullActions } from '../../data/resources/vehicles/vehicles-full/vehicles-full.actions';
import { ResourceActionsFacade } from './resource-actions.facade';

@Injectable({
  providedIn: 'root',
})
export class VehiclesActionsFacade implements ResourceActionsFacade {
  constructor(private store: Store) {}

  public fetchBriefCollection() {
    return this.store.dispatch(new VehiclesBriefActions.FetchCollection());
  }

  public fetchFullOne(id: string) {
    return this.store.dispatch(new VehiclesFullActions.FetchOne(id));
  }
}
