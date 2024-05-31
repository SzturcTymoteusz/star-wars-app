import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { StarshipsFullActions } from './starships-full.actions';
import { StarshipsFullHttpClient } from './starships-full.http-client';
import { tap } from 'rxjs';
import { Starship } from '../../../../types/resource/starships.types';
import { ResourceStore } from '../../resource-store.type';

@State<Record<string, Starship>>({
  name: 'starships_full',
  defaults: {},
})
@Injectable()
export class StarshipsFullStore extends ResourceStore {
  constructor(private starshipsFullHttpClient: StarshipsFullHttpClient) {
    super();
  }

  @Action(StarshipsFullActions.FetchOne)
  fetchOne(ctx: StateContext<Record<string, Starship>>, action: StarshipsFullActions.FetchOne) {
    return this.starshipsFullHttpClient.fetchOne(action.id).pipe(
      tap(starships => {
        ctx.patchState({ [action.id]: starships });
      })
    );
  }
}
