import { Resource, ResourceFullFetchOneResponse } from './resource-http.types';

export interface PeopleProperties {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  url: string;
}

export interface PeopleCardProperties extends PeopleProperties {
  homeworld_name: string;
}

export interface People extends Resource<PeopleProperties> {}
export interface PeopleCard extends Resource<PeopleCardProperties> {}

export interface PeopleFullFetchOneResponse extends ResourceFullFetchOneResponse<People> {}
