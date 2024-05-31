import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Planet, PlanetFullFetchOneResponse } from '../../../../types/resource/planets.types';

@Injectable({
  providedIn: 'root',
})
export class PlanetsFullHttpClient {
  constructor(private http: HttpClient) {}

  public fetchOne(id: string): Observable<Planet> {
    return this.http
      .get<PlanetFullFetchOneResponse>(`https://www.swapi.tech/api/planets/${id}`)
      .pipe(map(response => response.result));
  }
}
