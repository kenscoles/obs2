import { Component, inject } from '@angular/core';
import { DialogService } from '../shared/services/dialog.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatToolbarModule, MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
dialog = inject(DialogService)
longText = "this is the long text";
  reply?: string;
  ok: boolean = false;

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
     console.log(`result${this.ok}`) 
    return this.ok;
  }
  test() {

    this.dialog.Yes_No_Prompt({
      title: 'Please Confirm Action',
      message: 'Do you want to take this action?',
      confirmCaption: 'Oui',
      cancelCaption: 'Non',
    }).subscribe(result => {
      if (result) {
        console.log('true');// something is true (pressed yes)
        this.reply = 'affirmative';
      } else {
        console.log('false');// something if false (pressed no)
        this.reply = 'negative';
      }
    });
  }
}
