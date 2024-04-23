import { Component, OutputRef, effect } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { interval, of, take } from 'rxjs';

@Component({
  selector: 'app-my-timer',
  standalone: true,
  imports: [],
  template: `<h6>Timer component</h6>`,
  styles: `:host {
    display: block;
    background-color: rgb(184, 175, 226);
   }`
})
export class MyTimerComponent {
  //
   takeFourNumbers = interval(1000).pipe(take(4));
  //
  //timer: OutputRef<number> = outputFromObservable(interval(1000));
  timer: OutputRef<number> = outputFromObservable(interval(1000));
  timerAlias: OutputRef<number> = outputFromObservable(interval(1000), { alias: 'timerChange' });
  take4: OutputRef<number> = outputFromObservable(this.takeFourNumbers);
  
}
