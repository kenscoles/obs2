import { Component, effect, input, output } from '@angular/core';

@Component({
  selector: 'app-apple',
  template: `<p><b>Apple Component</b></p>
  <div class="container">
      <h2>Number of apples: {{myApples()}}</h2>
    </div>`,
  styles : `:host {
    display: block;
    background-color: rgb(235, 93, 83);
   }`,
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
