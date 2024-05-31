import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { VehicleCard } from '../../../types/resource/vehicles.types';
import { ArrayPropertyComponent } from '../common/properties/array-property/array-property.component';
import { BasicPropertyComponent } from '../common/properties/basic-property/basic-property.component';
import { CardTitleComponent } from '../common/card-title/card-title.component';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [MatCardModule, ArrayPropertyComponent, BasicPropertyComponent, CardTitleComponent],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.scss',
})
export class VehicleCardComponent {
  @Input() vehicle: VehicleCard;
}
