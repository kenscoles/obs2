import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// used with ITNEXT BehaviorSubject tutorial
// https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://itnext.io/angular-subjects-8ed5bf7c4f00&ved=2ahUKEwjnyePas4qFAxUuXUEAHYqwAHYQFnoECBAQAQ&usg=AOvVaw1obsG1p0Xrevs94Uh1WmLc
@Injectable({
  providedIn: 'root'
})
export class GroceryStoreService {
  private appleBasket: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private limeBasket: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {}

  getAppleBasket(): BehaviorSubject<number> {
    return this.appleBasket;
  }

  getLimeBasket(): BehaviorSubject<number> {
    return this.limeBasket;
  }
}

