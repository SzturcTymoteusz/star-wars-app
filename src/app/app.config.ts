import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { PeopleFullStore } from './data/resources/people/people-full/people-full.store';
import { PeopleBriefStore } from './data/resources/people/people-brief/people-brief.store';
import { PlanetsBriefStore } from './data/resources/planets/planets-brief/planets-brief.store';
import { PlanetsFullStore } from './data/resources/planets/planets-full/planets-full.store';
import { FilmsStore } from './data/resources/films/films.store';
import { SpeciesBriefStore } from './data/resources/species/species-brief/species-brief.store';
import { SpeciesFullStore } from './data/resources/species/species-full/species-full.store';
import { StarshipsBriefStore } from './data/resources/starships/starships-brief/starships-brief.store';
import { StarshipsFullStore } from './data/resources/starships/starships-full/starships-full.store';
import { VehiclesBriefStore } from './data/resources/vehicles/vehicles-brief/vehicles-brief.store';
import { VehiclesFullStore } from './data/resources/vehicles/vehicles-full/vehicles-full.store';
import { GameStore } from './data/game/game.store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      HttpClientModule,
      NgxsModule.forRoot([
        PeopleBriefStore,
        PeopleFullStore,
        PlanetsBriefStore,
        PlanetsFullStore,
        FilmsStore,
        SpeciesBriefStore,
        SpeciesFullStore,
        StarshipsBriefStore,
        StarshipsFullStore,
        VehiclesBriefStore,
        VehiclesFullStore,
        GameStore,
      ]),
      BrowserAnimationsModule
    ),
    provideAnimationsAsync(),
  ],
};
