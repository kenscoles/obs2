import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../dialogs/confirm/confirm.component';
import { ConfirmDialogData } from 'src/app/models/confirm-dialog-data';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) { }

  confirmDialog(data: ConfirmDialogData): Observable<boolean> {
    return this.dialog
      .open(ConfirmComponent, {
        data,
        width: '400px',
        disableClose: true,
      })
      .afterClosed();
  }
  //////experimental
  Yes_No_Prompt(data: ConfirmDialogData): Observable<boolean> {
    const yesNoDialog = this.dialog.open(ConfirmComponent, {
      data,
      width: '400px',
      disableClose: true,
    });

    return yesNoDialog.afterClosed();
  }
  /////////////////////////
}