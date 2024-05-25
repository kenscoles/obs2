import { enableProdMode, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
      importProvidersFrom(BrowserModule,BrowserAnimationsModule, FormsModule, MatDialogModule,),
      provideRouter(APP_ROUTES, withComponentInputBinding()), provideHttpClient(),
  ]
})
.catch(err => console.error(err));