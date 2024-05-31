import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { FilmsActions } from './films.actions';
import { FilmsHttpClient } from './films.http-client';
import { tap } from 'rxjs';
import { Film } from '../../../types/resource/films.types';
import { ResourceStore } from '../resource-store.type';

@State<Record<string, Film>>({
  name: 'films',
  defaults: {},
})
@Injectable()
export class FilmsStore extends ResourceStore {
  constructor(private filmsHttpClient: FilmsHttpClient) {
    super();
  }

  @Action(FilmsActions.FetchCollection)
  fetchCollection(ctx: StateContext<Record<string, Film>>) {
    return this.filmsHttpClient.fetchCollection().pipe(
      tap(films => {
        const newState = films.reduce(
          (acc, film) => {
            acc[film.uid] = film;
            return acc;
          },
          {} as Record<string, Film>
        );
        ctx.setState(newState);
      })
    );
  }

  @Action(FilmsActions.FetchOne)
  fetchOne(ctx: StateContext<Record<string, Film>>, action: FilmsActions.FetchOne) {
    return this.filmsHttpClient.fetchOne(action.id).pipe(
      tap(film => {
        ctx.patchState({ [action.id]: film });
      })
    );
  }
}
