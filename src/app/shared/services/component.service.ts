import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  public dataObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
  }
  isMenu = signal<boolean>(false)
  onDataReceived = (close: boolean) => this.dataObservable.next(close);

  getdataObservable(): BehaviorSubject<boolean> {
    return this.dataObservable;
  }
  setSignal() {
    this.isMenu.set(true)
    return "true"
  }

  unsetSignal() {
    this.isMenu.set(false)
  }

getSignal(){
  return this.isMenu()
}
}