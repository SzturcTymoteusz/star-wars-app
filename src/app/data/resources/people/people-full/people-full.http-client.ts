import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { People, PeopleFullFetchOneResponse } from '../../../../types/resource/people.types';

@Injectable({
  providedIn: 'root',
})
export class PeopleFullHttpClient {
  constructor(private http: HttpClient) {}

  public fetchOne(id: string): Observable<People> {
    return this.http
      .get<PeopleFullFetchOneResponse>(`https://www.swapi.tech/api/people/${id}`)
      .pipe(map(response => response.result));
  }
}
