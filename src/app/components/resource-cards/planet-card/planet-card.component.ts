import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PlanetCard } from '../../../types/resource/planets.types';
import { BasicPropertyComponent } from '../common/properties/basic-property/basic-property.component';
import { CardTitleComponent } from '../common/card-title/card-title.component';

@Component({
  selector: 'app-planet-card',
  standalone: true,
  imports: [MatCardModule, BasicPropertyComponent, CardTitleComponent],
  templateUrl: './planet-card.component.html',
  styleUrl: './planet-card.component.scss',
})
export class PlanetCardComponent {
  @Input() planet: PlanetCard;
}
