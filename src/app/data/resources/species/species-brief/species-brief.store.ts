import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { SpeciesBriefActions } from './species-brief.actions';
import { SpeciesBriefHttpClient } from './species-brief.http-client';
import { tap } from 'rxjs';
import { ResourceBriefStore } from '../../resource-brief-store.type';
import { ResourceBrief } from '../../../../types/resource/resource-http.types';

@State<ResourceBrief[]>({
  name: 'species_brief',
  defaults: [],
})
@Injectable()
export class SpeciesBriefStore extends ResourceBriefStore {
  constructor(private speciesBriefHttpClient: SpeciesBriefHttpClient) {
    super();
  }

  @Action(SpeciesBriefActions.FetchCollection)
  fetchCollection(ctx: StateContext<ResourceBrief[]>) {
    return this.speciesBriefHttpClient.fetchCollection().pipe(
      tap(species => {
        ctx.setState(species);
      })
    );
  }
}
