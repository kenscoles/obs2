import { Component, signal, effect, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { takeUntil, interval, take, map } from 'rxjs';
import { ProductService } from '../shared/services/product.service';
@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  //providers: [ProductService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  constructor() { }
  productService = inject(ProductService)
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
          (this.a.set(val)) // comma here
            //this.b.set(val)
        })
      )
  );
  test2 = toSignal(this.takeTenNumbers, { initialValue: 1 })
  incA() {
    this.a.set(this.a() + 1)
  }
  incB() {
    this.b.set(this.b() + 1)
  }
  test() {
    console.log("prime 32 ", this.isPrime(32))
    console.log("prime 37 ", this.isPrime(37))
  }
  isPrime(num: number): boolean {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
