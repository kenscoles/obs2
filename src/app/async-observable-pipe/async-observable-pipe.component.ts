import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'async-observable-pipe',
  template: '<div><code>observable|async</code>: Time: {{ now | async | date:" dd MMM yy - HH:mm" }}</div>'
})
export class AsyncObservablePipeComponent {
  now = new Observable<any>((observer: Observer<any>) => {
    setInterval(() => observer.next(new Date()), 1000);
  });
}