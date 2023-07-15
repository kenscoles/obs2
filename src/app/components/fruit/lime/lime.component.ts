import { Component, OnInit } from '@angular/core';
import { GroceryStoreService } from 'src/app/grocery-store.service';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AsyncObservablePipeComponent } from '../../../async-observable-pipe/async-observable-pipe.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-lime',
    templateUrl: './lime.component.html',
    styleUrls: ['./lime.component.css'],
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, AsyncObservablePipeComponent, AsyncPipe]
})
export class LimeComponent implements OnInit {
  limesBasket$: BehaviorSubject<number>;

  constructor(private groceryStoreService: GroceryStoreService) {
    this.limesBasket$ = this.groceryStoreService.getLimeBasket();
  }

  ngOnInit() { }

}