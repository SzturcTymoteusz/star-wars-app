import { Resource, ResourceFullFetchOneResponse } from './resource-http.types';

interface PlanetProperties {
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  created: string;
  edited: string;
  name: string;
  url: string;
}

interface PlanetCardProperties extends PlanetProperties {}

export interface Planet extends Resource<PlanetProperties> {}
export interface PlanetCard extends Resource<PlanetCardProperties> {}

export interface PlanetFullFetchOneResponse extends ResourceFullFetchOneResponse<Planet> {}
