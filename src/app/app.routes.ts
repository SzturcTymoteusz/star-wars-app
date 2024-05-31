import { Routes } from '@angular/router';
import { GamePageComponent } from './components/pages/game-page/game-page.component';

export const routes: Routes = [
  {
    path: 'game',
    component: GamePageComponent,
  },
  { path: '**', redirectTo: 'game' },
];
