import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { StarshipCard } from '../../../types/resource/starships.types';
import { ArrayPropertyComponent } from '../common/properties/array-property/array-property.component';
import { BasicPropertyComponent } from '../common/properties/basic-property/basic-property.component';
import { CardTitleComponent } from '../common/card-title/card-title.component';

@Component({
  selector: 'app-starship-card',
  standalone: true,
  imports: [MatCardModule, ArrayPropertyComponent, BasicPropertyComponent, CardTitleComponent],
  templateUrl: './starship-card.component.html',
  styleUrl: './starship-card.component.scss',
})
export class StarshipCardComponent {
  @Input() starship: StarshipCard;
}
