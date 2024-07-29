import {  ChangeDetectionStrategy,ChangeDetectorRef, Component } from '@angular/core';
import { BOpComponent } from '../b-op/b-op.component';

@Component({
  selector: 'a-op',
  standalone: true,
  imports: [BOpComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>This is the A component</div>
    <div>
User Name: {{user.name}} Number: {{num}}     
    </div>

    <button (click)="changeName()">A Change name</button>
    <button (click)="changeNum()">A Change number</button>
    <b-op [user]="user" [value]="num"></b-op>
  `,
  styles: `:host {
    display: block;
    background-color: rgb(236, 227, 128);
   }`
})
export class AOpComponent {
 user = { name: 'Ben' };
 num = 1;
 constructor(private cdr: ChangeDetectorRef) {}

  changeName() {
    if(this.user.name == 'Ben')
    {this.user.name = 'Ezra';}
    else this.user.name = 'Ben';
this.cdr.detectChanges()
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
