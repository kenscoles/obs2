import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type ItemType = {
  readonly id: number;
  readonly name: string;
};

type CollectionType = ReadonlyArray<ItemType>;

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styles : `:host {
    display: block;
    background-color:rgb(92, 121, 218);
   }`
})
export class ControlFlowComponent {
  isChecked = signal(true);

  collection: CollectionType = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  emptyCollection: CollectionType = [];

  radioValue = signal(1);
}
