import { Component, OnInit } from '@angular/core';
import { GroceryStoreService } from '../grocery-store.service';
import { BehaviorSubject } from 'rxjs';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-grocery',
    templateUrl: './grocery.component.html',
    styleUrls: ['./grocery.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class GroceryComponent implements OnInit {

  constructor(private groceryStoreService: GroceryStoreService) {
    this.applesBasket$ = this.groceryStoreService.getAppleBasket();
    this.limesBasket$ = this.groceryStoreService.getLimeBasket();

    this.applesBasket$.subscribe(value => {
      this.lastEvent = `Apples basket now has ${value} apple(s)`;
    });
    this.limesBasket$.subscribe(value => {
      this.lastEvent = `Limes basket now has ${value} lime(s)`;
    });
  }

  ngOnInit(): void {
  }
  numberOfApples = 0;
  numberOfLimes = 0;
  applesBasket$: BehaviorSubject<number>;
  limesBasket$: BehaviorSubject<number>;
  lastEvent:string = '';

  changeApples() {
    this.applesBasket$.next(this.numberOfApples);
  }

  changeLimes() {
    this.limesBasket$.next(this.numberOfLimes);
  }
}
