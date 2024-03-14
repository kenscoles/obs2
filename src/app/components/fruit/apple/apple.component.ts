import { Component, OnInit } from '@angular/core';
import { GroceryStoreService } from 'src/app/grocery-store.service';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
    selector: 'app-apple',
    templateUrl: './apple.component.html',
    styleUrls: ['./apple.component.css'],
    standalone: true,
    imports: [ MatToolbarModule, AsyncPipe]
})
export class AppleComponent implements OnInit {
  applesBasket$: BehaviorSubject<number>;

  constructor(private groceryStoreService: GroceryStoreService) {
    this.applesBasket$ = this.groceryStoreService.getAppleBasket();
  }

  ngOnInit() {}

}
