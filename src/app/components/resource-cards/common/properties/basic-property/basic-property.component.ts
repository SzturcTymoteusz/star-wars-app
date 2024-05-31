import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-property',
  standalone: true,
  imports: [],
  templateUrl: './basic-property.component.html',
  styleUrl: './basic-property.component.scss',
})
export class BasicPropertyComponent {
  @Input() property: string;
  @Input() value: string | number;

  public get formatValue() {
    return this.value === 'n/a' ? '-' : this.value;
  }
}
