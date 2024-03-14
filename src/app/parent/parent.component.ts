import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { IsEvenComponent } from '../is-even/is-even.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CounterComponent, IsEvenComponent, MatButtonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  count = 0
  
  increment() {
    this.count += 1
  }
  decrement() {
    this.count -= 1
  }

}
