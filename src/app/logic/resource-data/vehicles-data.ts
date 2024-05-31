import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { VehiclesBriefStore } from '../../data/resources/vehicles/vehicles-brief/vehicles-brief.store';
import { Vehicle, VehicleCard } from '../../types/resource/vehicles.types';
import { VehiclesFullStore } from '../../data/resources/vehicles/vehicles-full/vehicles-full.store';
import { ResourceBrief } from '../../types/resource/resource-http.types';
import { ResourceDataProvider } from './resource-data';

@Injectable({
  providedIn: 'root',
})
export class VehiclesData implements ResourceDataProvider<VehicleCard> {
  constructor(private store: Store) {}

  public briefCollection(): Observable<ResourceBrief[]> {
    return this.store.select(VehiclesBriefStore);
  }

  public fullEntityById(id: string): Observable<VehicleCard> {
    return this.store.select(VehiclesFullStore.ById<Vehicle>(id));
  }
}
