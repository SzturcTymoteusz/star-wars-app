import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  Film,
  FilmsFetchCollectionResponse,
  FilmsFetchOneResponse,
} from '../../../types/resource/films.types';

@Injectable({
  providedIn: 'root',
})
export class FilmsHttpClient {
  constructor(private http: HttpClient) {}

  public fetchCollection(): Observable<Film[]> {
    return this.http
      .get<FilmsFetchCollectionResponse>('https://www.swapi.tech/api/films')
      .pipe(map(response => response.result));
  }

  public fetchOne(id: string): Observable<Film> {
    return this.http
      .get<FilmsFetchOneResponse>(`https://www.swapi.tech/api/films/${id}`)
      .pipe(map(response => response.result));
  }
}
