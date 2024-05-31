import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-title',
  standalone: true,
  imports: [],
  templateUrl: './card-title.component.html',
  styleUrl: './card-title.component.scss',
})
export class CardTitleComponent {
  @Input() title: string;
}
