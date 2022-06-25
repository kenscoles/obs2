import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DialogService } from './services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dialog: DialogService) {}
  longText ="this is the long text";
  reply?:string;
  ok : boolean = false;
  yesNoDialog() {
    this.dialog
      .confirmDialog({
        title: 'Are you sure?',
        message: 'Are you sure you want to do this?',
        confirmCaption: 'Yes',
        cancelCaption: 'No',
      })
      .subscribe((yes) => {
        if (yes) {
          console.log('reply : YES');
          this.reply = 'reply YES';
        }
        else {
          console.log('reply : NO');
          this.reply = 'reply : NO';
        }
      });
  }

  confirmCancelDialog() {
    this.dialog
      .confirmDialog({
        title: 'Confirm Action',
        message: 'Do you want to confirm this action?',
        confirmCaption: 'Confirm',
        cancelCaption: 'Cancel',
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          console.log('The user confirmed the action');
          this.reply = 'Confirmed';
          
        }
        else {
          console.log('The user did not confirm the action');
          this.reply = 'Not Confirmed';
          this.ok = false;
        }
      });
  }
  ////
   myConfirmCancelDialog(): boolean {
    this.dialog
      .confirmDialog({
        title: 'Confirm Action',
        message: 'Do you want to confirm this action?',
        confirmCaption: 'Confirm',
        cancelCaption: 'Cancel',
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          console.log('The user confirmed the action');
          this.reply = 'Confirmed';
          this.ok = true;
        }
        else {
          console.log('The user did not confirm the action');
          this.reply = 'Not Confirmed';
          this.ok = false;
        }
      });
      return this.ok; 
    }
   async test(){
    this.ok =  this.myConfirmCancelDialog();
    console.log(this.ok);
      //this.reply = 'worked??';
    
  }
  ////
}
