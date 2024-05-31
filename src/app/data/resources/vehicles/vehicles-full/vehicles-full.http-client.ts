import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Vehicle, VehiclesFullFetchOneResponse } from '../../../../types/resource/vehicles.types';

@Injectable({
  providedIn: 'root',
})
export class VehiclesFullHttpClient {
  constructor(private http: HttpClient) {}

  public fetchOne(id: string): Observable<Vehicle> {
    return this.http
      .get<VehiclesFullFetchOneResponse>(`https://www.swapi.tech/api/vehicles/${id}`)
      .pipe(map(response => response.result));
  }
}
