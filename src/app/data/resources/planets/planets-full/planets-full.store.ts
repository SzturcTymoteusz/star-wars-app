import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { PlanetsFullActions } from './planets-full.actions';
import { PlanetsFullHttpClient } from './planets-full.http-client';
import { tap } from 'rxjs';
import { ResourceStore } from '../../resource-store.type';
import { Planet } from '../../../../types/resource/planets.types';

@State<Record<string, Planet>>({
  name: 'planets_full',
  defaults: {},
})
@Injectable()
export class PlanetsFullStore extends ResourceStore {
  constructor(private planetsFullHttpClient: PlanetsFullHttpClient) {
    super();
  }

  @Action(PlanetsFullActions.FetchOne)
  fetchOne(ctx: StateContext<Record<string, Planet>>, action: PlanetsFullActions.FetchOne) {
    return this.planetsFullHttpClient.fetchOne(action.id).pipe(
      tap(planet => {
        ctx.patchState({ [action.id]: planet });
      })
    );
  }
}
