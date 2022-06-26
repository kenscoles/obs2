import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  public dataObsevable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  onDataReceived = (close: boolean) => this.dataObsevable.next(close);

}