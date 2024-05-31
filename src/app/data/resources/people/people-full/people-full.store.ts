import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { PeopleFullActions } from './people-full.actions';
import { PeopleFullHttpClient } from './people-full.http-client';
import { tap } from 'rxjs';
import { ResourceStore } from '../../resource-store.type';
import { People } from '../../../../types/resource/people.types';

@State<Record<string, People>>({
  name: 'people_full',
  defaults: {},
})
@Injectable()
export class PeopleFullStore extends ResourceStore {
  constructor(private peopleHttpClient: PeopleFullHttpClient) {
    super();
  }

  @Action(PeopleFullActions.FetchOne)
  fetchOne(ctx: StateContext<Record<string, People>>, action: PeopleFullActions.FetchOne) {
    return this.peopleHttpClient.fetchOne(action.id).pipe(
      tap(people => {
        ctx.patchState({ [action.id]: people });
      })
    );
  }
}
