import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-array-property',
  standalone: true,
  imports: [],
  templateUrl: './array-property.component.html',
  styleUrl: './array-property.component.scss',
})
export class ArrayPropertyComponent implements OnChanges {
  @Input() property: string;
  @Input() values: string[];

  public visibleValues: string[] = [];

  ngOnChanges() {
    this.visibleValues = this.values.slice(0, 3);
  }
}
