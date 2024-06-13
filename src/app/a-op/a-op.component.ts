import {  ChangeDetectionStrategy, Component } from '@angular/core';
import { BOpComponent } from '../b-op/b-op.component';

@Component({
  selector: 'a-op',
  standalone: true,
  imports: [BOpComponent],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>
    <button (click)="changeName()">A Change name</button>
    <button (click)="changeNum()">A Change number</button>
    <b-op [user]="user" [value]="num"></b-op>

    </p>
  `,
  styles: ``
})
export class AOpComponent {
 user = { name: 'A' };
 num = 1;

  changeName() {
    
    //this.num+=1;
    this.user.name = 'B';

     console.log("from A",this.user)
   /*  this.user = {
      ...this.user,
      name: 'B',
    }
    console.log(this.user) */ 
  }
  changeNum(){
    this.num+=1;
  }
}
