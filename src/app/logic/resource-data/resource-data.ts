import { Observable } from 'rxjs';
import { ResourceBrief } from '../../types/resource/resource-http.types';

export abstract class ResourceDataProvider<Type> {
  abstract briefCollection(): Observable<ResourceBrief[]>;
  abstract fullEntityById(id: string): Observable<Type>;
}
