import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'is-even',
  template: `<div>Is Even: {{ isEven() }} </div>
  <div>Is Odd: {{ isOdd() }} </div>
  @if(isBy3()) {<div>Number divisible by 3 </div>}
  @if(isBy2()) {<div>Number divisible by 2 </div>}
  `,
   styleUrl: './is-even.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IsEvenComponent {
  counter = input.required<number>();
  isEven =  computed(() => this.counter() % 2 === 0);
  isOdd = computed(() => this.counter() % 2 !== 0);
  isBy3 = computed(() => (this.counter() % 3 == 0) && this.counter()!==0);
  isBy2 = computed(() => (this.counter() % 2 == 0) && this.counter()!==0);
}


