import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { VehiclesBriefActions } from './vehicles-brief.actions';
import { VehiclesBriefHttpClient } from './vehicles-brief.http-client';
import { tap } from 'rxjs';
import { ResourceBriefStore } from '../../resource-brief-store.type';
import { ResourceBrief } from '../../../../types/resource/resource-http.types';

@State<ResourceBrief[]>({
  name: 'vehicles_brief',
  defaults: [],
})
@Injectable()
export class VehiclesBriefStore extends ResourceBriefStore {
  constructor(private vehiclesBriefHttpClient: VehiclesBriefHttpClient) {
    super();
  }

  @Action(VehiclesBriefActions.FetchCollection)
  fetchCollection(ctx: StateContext<ResourceBrief[]>) {
    return this.vehiclesBriefHttpClient.fetchCollection().pipe(
      tap(vehicles => {
        ctx.setState(vehicles);
      })
    );
  }
}
