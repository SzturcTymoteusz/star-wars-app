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
export class StarshipsBriefHttpClient {
  constructor(private http: HttpClient) {}

  public fetchCollection(): Observable<ResourceBrief[]> {
    return this.http
      .get<ResourceBriefFetchCollectionResponse>(
        'https://www.swapi.tech/api/starships?page=1&limit=100'
      )
      .pipe(map(response => response.results));
  }
}
