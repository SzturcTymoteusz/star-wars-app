import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { StarshipsBriefActions } from './starships-brief.actions';
import { StarshipsBriefHttpClient } from './starships-brief.http-client';
import { tap } from 'rxjs';
import { ResourceBriefStore } from '../../resource-brief-store.type';
import { ResourceBrief } from '../../../../types/resource/resource-http.types';

@State<ResourceBrief[]>({
  name: 'starships_brief',
  defaults: [],
})
@Injectable()
export class StarshipsBriefStore extends ResourceBriefStore {
  constructor(private starshipsBriefHttpClient: StarshipsBriefHttpClient) {
    super();
  }

  @Action(StarshipsBriefActions.FetchCollection)
  fetchCollection(ctx: StateContext<ResourceBrief[]>) {
    return this.starshipsBriefHttpClient.fetchCollection().pipe(
      tap(planets => {
        ctx.setState(planets);
      })
    );
  }
}
