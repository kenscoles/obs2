import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'is-even',
  template: `

  @if(isOdd()) {<div><strong>{{counter()}}</strong> is an odd number </div>}
  @if(isEven()) {<div><strong>{{counter()}}</strong> is an even number </div>}
  @if(isBy12()) {<div>divides by 12 </div>}
  @if(isBy11()) {<div>divides by 11 </div>}
  @if(isBy10()) {<div>divides by 10 </div>}
  @if(isBy9()) {<div>divides by 9 </div>}
  @if(isBy8()) {<div>divides by 8 </div>}
  @if(isBy7()) {<div>divides by 7 </div>}
  @if(isBy6()) {<div>divides by 6 </div>}
  @if(isBy5()) {<div>divides by 5 </div>}
  @if(isBy4()) {<div>divides by 4 </div>}
  @if(isBy3()) {<div>divides by 3 </div>}
  @if(isBy2()) {<div>divides by 2 </div>}
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
  isBy11 = computed(() => (this.counter() % 11 == 0) && this.counter()!==0);
  isBy12 = computed(() => (this.counter() % 12 == 0) && this.counter()!==0);
}


