import { Resource, ResourceFullFetchOneResponse } from './resource-http.types';

interface SpeciesProperties {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: string[];
  skin_colors: string;
  url: string;
}

interface SpeciesCardProperties extends SpeciesProperties {
  people_names: string[];
  homeworld_name: string;
}

export interface Species extends Resource<SpeciesProperties> {}
export interface SpeciesCard extends Resource<SpeciesCardProperties> {}

export interface SpeciesFullFetchOneResponse extends ResourceFullFetchOneResponse<Species> {}
