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
    background-color: rgb(201, 206, 158);
   }`
})
export class ControlFlowComponent {
  isChecked = signal(true);

  collection: CollectionType = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' }
  ];
  emptyCollection: CollectionType = [];

  radioValue = signal(1);
}
