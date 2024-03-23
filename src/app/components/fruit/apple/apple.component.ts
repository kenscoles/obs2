import { Component, effect, input, output } from '@angular/core';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css'],
  standalone: true,
  imports: []
})
export class AppleComponent {
  
  constructor() {
    
    effect(() => {
      this.reportApples.emit(this.myApples());  // emits when signal changes
    });
  }
  
  myApples = input.required<number>();
  reportApples = output<number>()
  
}
