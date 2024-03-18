import { Component, OnInit, effect, input, output } from '@angular/core';
import { GroceryStoreService } from 'src/app/grocery-store.service';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AsyncObservablePipeComponent } from '../../../async-observable-pipe/async-observable-pipe.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-lime',
    templateUrl: './lime.component.html',
    styleUrls: ['./lime.component.css'],
    standalone: true,
    imports: [MatToolbarModule, AsyncObservablePipeComponent, AsyncPipe]
})
export class LimeComponent implements OnInit {
  limesBasket$: BehaviorSubject<number>;
  myLimes = input.required<number>() // a signal input from cli 17.2
  reportLimes = output<number>() // a signal output

  constructor(private groceryStoreService: GroceryStoreService) {
    this.limesBasket$ = this.groceryStoreService.getLimeBasket();
    effect(() => {
      this.reportLimes.emit(this.myLimes());  // emits when signal changes
    });
  }

  ngOnInit() { }

}