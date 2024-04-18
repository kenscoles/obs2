import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  status = output<string>();

  onChangeStatus() {
    this.status.emit('Status Changed');
  }
}
