import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  ResourceBrief,
  ResourceBriefFetchCollectionResponse,
} from '../../../../types/resource/resource-http.types';

@Injectable({
  providedIn: 'root',
})
export class SpeciesBriefHttpClient {
  constructor(private http: HttpClient) {}

  public fetchCollection(): Observable<ResourceBrief[]> {
    return this.http
      .get<ResourceBriefFetchCollectionResponse>(
        'https://www.swapi.tech/api/species?page=1&limit=100'
      )
      .pipe(map(response => response.results));
  }
}
