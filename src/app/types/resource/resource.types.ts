import { People } from './people.types';
import { Species } from './species.types';
import { Starship } from './starships.types';
import { Planet } from './planets.types';
import { Film } from './films.types';
import { Vehicle } from './vehicles.types';

export type ResourceItem = People | Planet | Film | Species | Vehicle | Starship;
