import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router'
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ RouterModule, RouterOutlet, AsyncObservablePipeComponent] 
})

export class AppComponent {
  constructor() { }
 
  
}
