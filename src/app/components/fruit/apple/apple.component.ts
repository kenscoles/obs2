import { Component, OnInit, effect, input, output } from '@angular/core';
import { GroceryStoreService } from 'src/app/grocery-store.service';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css'],
  standalone: true,
  imports: [MatToolbarModule, AsyncPipe]
})
export class AppleComponent implements OnInit {
  applesBasket$: BehaviorSubject<number>;

  constructor(private groceryStoreService: GroceryStoreService) {
    this.applesBasket$ = this.groceryStoreService.getAppleBasket();
    effect(() => {
      this.reportApples.emit(this.myApples());  // emits when signal changes
    });
  }
  
  myApples = input.required<number>();
  reportApples = output<number>()
  ngOnInit() {
    
   }

}
