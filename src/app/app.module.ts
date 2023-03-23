import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module'; // contains ang mat stuff
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { GroceryComponent } from './grocery/grocery.component';
import { AppleComponent } from './components/fruit/apple/apple.component';
import { LimeComponent } from './components/fruit/lime/lime.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmComponent,
    GroceryComponent,
    AppleComponent,
    LimeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
