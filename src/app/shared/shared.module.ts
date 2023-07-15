import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncObservablePipeComponent } from '../async-observable-pipe/async-observable-pipe.component';
//import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
//import {MatProgressBarModule} from '@angular/material/progress-bar';
//import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({

  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    AsyncObservablePipeComponent
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    AsyncObservablePipeComponent
  ]
})
export class SharedModule { }
