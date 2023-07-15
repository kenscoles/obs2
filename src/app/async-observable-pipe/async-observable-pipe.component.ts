import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
    selector: 'async-observable-pipe',
    template: '<div> Time: {{ now | async | date:" dd MMM yy - HH:mm" }}</div>',
    standalone: true,
    imports: [AsyncPipe, DatePipe]
})
export class AsyncObservablePipeComponent {
  now = new Observable<any>((observer: Observer<any>) => {
    setInterval(() => observer.next(new Date()), 1000);
  });
}