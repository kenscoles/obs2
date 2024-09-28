import { Component, inject, DestroyRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentService } from '../shared/services/component.service';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  componentService = inject(ComponentService)
  products = inject(ProductService)
  constructor() {
    this.componentService.isMenu.set(true) // this is the menu
    const destroyRef = inject(DestroyRef);
    // register a destroy callback
    destroyRef.onDestroy(() =>
    this.componentService.isMenu.set(false));
  }

}
