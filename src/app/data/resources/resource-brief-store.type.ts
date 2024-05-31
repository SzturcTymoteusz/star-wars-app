import { createSelector } from '@ngxs/store';

export class ResourceBriefStore {
  static ById<Type extends { uid: string }>(id: string) {
    return createSelector([this], (state: Type[]) => {
      return state.find(item => item.uid === id)!;
    });
  }

  static ByIds<Type extends { uid: string }>(ids: string[]) {
    return createSelector([this], (state: Type[]) => {
      return ids.map(id => state.find(item => item.uid === id)!);
    });
  }
}
