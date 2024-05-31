import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Species, SpeciesFullFetchOneResponse } from '../../../../types/resource/species.types';

@Injectable({
  providedIn: 'root',
})
export class SpeciesFullHttpClient {
  constructor(private http: HttpClient) {}

  public fetchOne(id: string): Observable<Species> {
    return this.http
      .get<SpeciesFullFetchOneResponse>(`https://www.swapi.tech/api/species/${id}`)
      .pipe(map(response => response.result));
  }
}
