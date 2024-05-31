import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SpeciesCard } from '../../../types/resource/species.types';
import { CardTitleComponent } from '../common/card-title/card-title.component';
import { BasicPropertyComponent } from '../common/properties/basic-property/basic-property.component';
import { ArrayPropertyComponent } from '../common/properties/array-property/array-property.component';

@Component({
  selector: 'app-species-card',
  standalone: true,
  imports: [MatCardModule, CardTitleComponent, BasicPropertyComponent, ArrayPropertyComponent],
  templateUrl: './species-card.component.html',
  styleUrl: './species-card.component.scss',
})
export class SpeciesCardComponent {
  @Input() species: SpeciesCard;
}
