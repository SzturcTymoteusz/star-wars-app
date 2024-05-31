import { createSelector } from '@ngxs/store';
import { Film } from '../../types/resource/films.types';

export class ResourceStore {
  static ById<Type>(id: string) {
    return createSelector([this], (state: Record<string, Type>) => {
      return state[id];
    });
  }

  static Entities() {
    return createSelector([this], (state: Record<string, Film>) => {
      return Object.values(state);
    });
  }
}
