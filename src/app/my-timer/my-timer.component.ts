import { Component, OutputRef, effect } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-my-timer',
  standalone: true,
  imports: [],
  template: `<h6>Timer component</h6>`,
  styleUrl: './my-timer.component.css'
})
export class MyTimerComponent {
  //
   takeFourNumbers = interval(1000).pipe(take(4));
  //
  timer: OutputRef<number> = outputFromObservable(interval(1000));
  timerAlias: OutputRef<number> = outputFromObservable(interval(1000), { alias: 'timerChange' });
  take4: OutputRef<number> = outputFromObservable(this.takeFourNumbers);
  
}
