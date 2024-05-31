import { Resource, ResourceFullFetchOneResponse } from './resource-http.types';

interface VehicleProperties {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  url: string;
  vehicle_class: string;
}
interface VehicleCardProperties extends VehicleProperties {}

export interface Vehicle extends Resource<VehicleProperties> {}
export interface VehicleCard extends Resource<VehicleCardProperties> {}

export interface VehiclesFullFetchOneResponse extends ResourceFullFetchOneResponse<Vehicle> {}
