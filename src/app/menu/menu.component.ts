import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentService } from '../shared/services/component.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit, OnDestroy {
  
  componentService  = inject(ComponentService)
  ngOnInit(): void {
    var test = this.componentService.setSignal()
    console.log("Test", test)
  }

  ngOnDestroy(): void {
    this.componentService.unsetSignal()
  }

}
