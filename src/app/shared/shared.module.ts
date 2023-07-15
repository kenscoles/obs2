import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncObservablePipeComponent } from '../async-observable-pipe/async-observable-pipe.component';
import { MatCardModule } from '@angular/material/card';;
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [AsyncObservablePipeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule
  ],
  exports: [
    AsyncObservablePipeComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule
  ]
})
export class SharedModule { }
