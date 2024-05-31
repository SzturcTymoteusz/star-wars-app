import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { PlanetsBriefActions } from './planets-brief.actions';
import { PlanetsBriefHttpClient } from './planets-brief.http-client';
import { tap } from 'rxjs';
import { ResourceBriefStore } from '../../resource-brief-store.type';
import { ResourceBrief } from '../../../../types/resource/resource-http.types';

@State<ResourceBrief[]>({
  name: 'planets_brief',
  defaults: [],
})
@Injectable()
export class PlanetsBriefStore extends ResourceBriefStore {
  constructor(private planetsBriefHttpClient: PlanetsBriefHttpClient) {
    super();
  }

  @Action(PlanetsBriefActions.FetchCollection)
  fetchCollection(ctx: StateContext<ResourceBrief[]>) {
    return this.planetsBriefHttpClient.fetchCollection().pipe(
      tap(planets => {
        ctx.setState(planets);
      })
    );
  }
}
