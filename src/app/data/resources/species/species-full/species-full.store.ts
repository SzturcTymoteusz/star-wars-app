import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { SpeciesFullActions } from './species-full.actions';
import { SpeciesFullHttpClient } from './species-full.http-client';
import { tap } from 'rxjs';
import { Species } from '../../../../types/resource/species.types';
import { ResourceStore } from '../../resource-store.type';

@State<Record<string, Species>>({
  name: 'species_full',
  defaults: {},
})
@Injectable()
export class SpeciesFullStore extends ResourceStore {
  constructor(private speciesFullHttpClient: SpeciesFullHttpClient) {
    super();
  }

  @Action(SpeciesFullActions.FetchOne)
  fetchOne(ctx: StateContext<Record<string, Species>>, action: SpeciesFullActions.FetchOne) {
    return this.speciesFullHttpClient.fetchOne(action.id).pipe(
      tap(species => {
        ctx.patchState({ [action.id]: species });
      })
    );
  }
}
