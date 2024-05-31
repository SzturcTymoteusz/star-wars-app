import { Resource, ResourceFullFetchOneResponse } from './resource-http.types';

interface FilmProperties {
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  producer: string;
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  opening_crawl: string;
  url: string;
}

export interface FilmCardProperties extends FilmProperties {
  character_names: string[];
  planet_names: string[];
  starship_names: string[];
  vehicle_names: string[];
  species_names: string[];
}

export interface Film extends Resource<FilmProperties> {}
export interface FilmCard extends Resource<FilmCardProperties> {}

export interface FilmsFetchCollectionResponse extends ResourceFullFetchOneResponse<Film[]> {}
export interface FilmsFetchOneResponse extends ResourceFullFetchOneResponse<Film> {}
