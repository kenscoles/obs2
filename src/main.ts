import { enableProdMode, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
      importProvidersFrom(BrowserModule,BrowserAnimationsModule, FormsModule, MatDialogModule ),
      
  ]
})
.catch(err => console.error(err));