import { Resource, ResourceFullFetchOneResponse } from './resource-http.types';

interface StarshipProperties {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  starship_class: string;
  url: string;
}
interface StarshipCardProperties extends StarshipProperties {}

export interface Starship extends Resource<StarshipProperties> {}
export interface StarshipCard extends Resource<StarshipCardProperties> {}

export interface StarshipsFullFetchOneResponse extends ResourceFullFetchOneResponse<Starship> {}
