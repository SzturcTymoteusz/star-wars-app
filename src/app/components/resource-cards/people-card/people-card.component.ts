import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { BasicPropertyComponent } from '../common/properties/basic-property/basic-property.component';
import { PeopleCard } from '../../../types/resource/people.types';
import { CardTitleComponent } from '../common/card-title/card-title.component';

@Component({
  selector: 'app-people-card',
  standalone: true,
  imports: [MatCardModule, MatButton, BasicPropertyComponent, CardTitleComponent],
  templateUrl: './people-card.component.html',
  styleUrl: './people-card.component.scss',
})
export class PeopleCardComponent {
  @Input() people: PeopleCard;
}
