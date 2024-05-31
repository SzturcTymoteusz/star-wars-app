import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { VehiclesFullActions } from './vehicles-full.actions';
import { VehiclesFullHttpClient } from './vehicles-full.http-client';
import { tap } from 'rxjs';
import { Vehicle } from '../../../../types/resource/vehicles.types';
import { ResourceStore } from '../../resource-store.type';

@State<Record<string, Vehicle>>({
  name: 'vehicles_full',
  defaults: {},
})
@Injectable()
export class VehiclesFullStore extends ResourceStore {
  constructor(private vehiclesFullHttpClient: VehiclesFullHttpClient) {
    super();
  }

  @Action(VehiclesFullActions.FetchOne)
  fetchOne(ctx: StateContext<Record<string, Vehicle>>, action: VehiclesFullActions.FetchOne) {
    return this.vehiclesFullHttpClient.fetchOne(action.id).pipe(
      tap(vehicles => {
        ctx.patchState({ [action.id]: vehicles });
      })
    );
  }
}
