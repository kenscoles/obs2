import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AppleComponent } from '../components/fruit/apple/apple.component';
import { LimeComponent } from '../components/fruit/lime/lime.component';

@Component({
    selector: 'app-grocery',
    templateUrl: './grocery.component.html',
    styleUrls: ['./grocery.component.css'],
    standalone: true,
    imports: [FormsModule, MatButtonModule, AppleComponent, LimeComponent]
})
export class GroceryComponent {

  constructor() {}
  
  sigApples = signal<number>(6)
  sigLimes = signal<number>(6)
  numberOfFruit = computed (() => Number(Number(this.sigApples())) + (Number(this.sigLimes()))) 
  
  AddApples($event: any): void{ // $event contains number of apples
    console.log(`apples:${$event}`)
  }

  AddLimes($event: any): void{ // $event contains number of limes
    console.log(`limes:${$event}`)
  }
}
