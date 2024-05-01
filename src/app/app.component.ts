import { Component, inject, signal } from '@angular/core';
import { RouterOutlet,RouterModule, Router } from '@angular/router'
import { AsyncObservablePipeComponent } from './shared/pipes/async-observable-pipe/async-observable-pipe.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ComponentService } from './shared/services/component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ RouterModule, RouterOutlet, AsyncObservablePipeComponent,
    MatButtonModule, MatToolbarModule] 
})

export class AppComponent {
  constructor() { }
  router = inject(Router)
  componentService = inject(ComponentService)

  ngOnInit(): void {
    
    this.router.navigate(['/menu'])
  }
  
myTest = this.componentService.isMenu

}
