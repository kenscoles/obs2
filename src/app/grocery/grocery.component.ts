import { Component, OnInit } from '@angular/core';
import { GroceryStoreService } from '../grocery-store.service';
import { BehaviorSubject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AppleComponent } from '../components/fruit/apple/apple.component';
import { LimeComponent } from '../components/fruit/lime/lime.component';

@Component({
    selector: 'app-grocery',
    templateUrl: './grocery.component.html',
    styleUrls: ['./grocery.component.css'],
    standalone: true,
    imports: [FormsModule, MatButtonModule, AppleComponent, LimeComponent]
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

  
  AddApples($event: any){ // $event contains number of apples
    this.applesBasket$.next($event);
  }
  AddLimes($event: any){ // $event contains number of limes
    this.limesBasket$.next($event);
  }
}
