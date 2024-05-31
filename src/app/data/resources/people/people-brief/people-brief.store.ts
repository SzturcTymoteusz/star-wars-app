import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { PeopleBriefActions } from './people-brief.actions';
import { PeopleBriefHttpClient } from './people-brief.http-client';
import { tap } from 'rxjs';
import { ResourceBriefStore } from '../../resource-brief-store.type';
import { ResourceBrief } from '../../../../types/resource/resource-http.types';

@State<ResourceBrief[]>({
  name: 'people_brief',
  defaults: [],
})
@Injectable()
export class PeopleBriefStore extends ResourceBriefStore {
  constructor(private peopleHttpClient: PeopleBriefHttpClient) {
    super();
  }

  @Action(PeopleBriefActions.FetchCollection)
  fetchCollection(ctx: StateContext<ResourceBrief[]>) {
    return this.peopleHttpClient.fetchCollection().pipe(
      tap(people => {
        ctx.setState(people);
      })
    );
  }
}
