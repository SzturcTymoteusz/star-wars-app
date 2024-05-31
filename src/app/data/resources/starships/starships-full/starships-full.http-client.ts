import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  Starship,
  StarshipsFullFetchOneResponse,
} from '../../../../types/resource/starships.types';

@Injectable({
  providedIn: 'root',
})
export class StarshipsFullHttpClient {
  constructor(private http: HttpClient) {}

  public fetchOne(id: string): Observable<Starship> {
    return this.http
      .get<StarshipsFullFetchOneResponse>(`https://www.swapi.tech/api/starships/${id}`)
      .pipe(map(response => response.result));
  }
}
