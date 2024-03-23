import { Component, effect, input, output } from '@angular/core';

@Component({
    selector: 'app-lime',
    templateUrl: './lime.component.html',
    styleUrls: ['./lime.component.css'],
    standalone: true,
    imports: []
})
export class LimeComponent {

  myLimes = input.required<number>() // a signal input from cli 17.2
  reportLimes = output<number>() // a signal output

  constructor() {
    effect(() => {
      this.reportLimes.emit(this.myLimes());  // emits when signal changes
    });
  }

}