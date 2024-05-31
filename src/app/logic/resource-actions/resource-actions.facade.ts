import { Observable } from 'rxjs';

export abstract class ResourceActionsFacade {
  abstract fetchBriefCollection(): Observable<undefined>;
  abstract fetchFullOne(id: string): Observable<undefined>;
}
