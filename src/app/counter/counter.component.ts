import { ChangeDetectionStrategy, Component, effect, input, model } from '@angular/core';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [],
  template: `<h2>Counter : {{ value() }} </h2>`,
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  value = input.required<number>();
  //myVal = model.required<number>()

  constructor() {
    effect(() => {
      console.log(`New value: ${this.value()}`);
      
    });
  }
}
