import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import {MatDialogModule} from '@angular/material/dialog';
import { GroceryComponent } from './grocery/grocery.component';
import { AppleComponent } from './components/fruit/apple/apple.component';
import { LimeComponent } from './components/fruit/lime/lime.component';
import { GroceryStoreService } from './grocery-store.service';
import { FormsModule } from '@angular/forms';
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmComponent,
    GroceryComponent,
    AppleComponent,
    LimeComponent,
    AsyncObservablePipeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [GroceryStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
