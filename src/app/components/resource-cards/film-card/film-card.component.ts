import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FilmCard } from '../../../types/resource/films.types';
import { ArrayPropertyComponent } from '../common/properties/array-property/array-property.component';
import { BasicPropertyComponent } from '../common/properties/basic-property/basic-property.component';
import { CardTitleComponent } from '../common/card-title/card-title.component';

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [MatCardModule, ArrayPropertyComponent, BasicPropertyComponent, CardTitleComponent],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
})
export class FilmCardComponent {
  @Input() film: FilmCard;
}
