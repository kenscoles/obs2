import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'is-even',
  template: `<div>Is Even: {{ isEven() }} </div>
  <div>Is Odd: {{ isOdd() }} </div>
  @if(isBy10()) {<div>Number divisible by 10 </div>}
  @if(isBy9()) {<div>Number divisible by 9 </div>}
  @if(isBy8()) {<div>Number divisible by 8 </div>}
  @if(isBy7()) {<div>Number divisible by 7 </div>}
  @if(isBy6()) {<div>Number divisible by 6 </div>}
  @if(isBy5()) {<div>Number divisible by 5 </div>}
  @if(isBy4()) {<div>Number divisible by 4 </div>}
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
  isBy4 = computed(() => (this.counter() % 4 == 0) && this.counter()!==0);
  isBy5 = computed(() => (this.counter() % 5 == 0) && this.counter()!==0);
  isBy6 = computed(() => (this.counter() % 6 == 0) && this.counter()!==0);
  isBy7 = computed(() => (this.counter() % 7 == 0) && this.counter()!==0);
  isBy8 = computed(() => (this.counter() % 8 == 0) && this.counter()!==0);
  isBy9 = computed(() => (this.counter() % 9 == 0) && this.counter()!==0);
  isBy10 = computed(() => (this.counter() % 10 == 0) && this.counter()!==0);
}


