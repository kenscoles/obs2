import { Component, signal, effect, computed, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { takeUntil, interval, take, map } from 'rxjs';
@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  constructor() { }
  a = signal(0)
  b = signal(2)
  //effect = (()=>this.c.set(this.a()+this.b()))
  c = computed(() => {
    return this.a() + this.b();
  })
  d = computed(() => {
    return this.a() * this.b();
  })

  takeTenNumbers = interval(2000).pipe(take(13));
  
  counter = toSignal(
    this.takeTenNumbers
      .pipe(
        map(val => {
          (this.a.set(val)),
          this.b.set(val)
        })
      )
  );
test2 = toSignal(this.takeTenNumbers, {initialValue:1})
  incA() {
    this.a.set(this.a() + 1)
  }
  incB() {
    this.b.set(this.b() + 1)
  }
  test() {

  }
}
