import { Component } from '@angular/core';
import { DebounceClickDirective } from '../shared/directives/debounce-click.directive';
import { DebounceKeyupDirective } from '../shared/directives/debounce-keyup.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-debounce',
  standalone: true,
  imports: [DebounceClickDirective, DebounceKeyupDirective, CommonModule],
  templateUrl: './debounce.component.html',
  styleUrl: './debounce.component.css'
})
export class DebounceComponent {
  public inputValue!: string; // added
  
  public handleDebouncedKeyUp(event: { target: { value: any; }; }): void {
    this.inputValue = `Making API call with: ${event.target.value}`;
  }

  public handleDebouncedClick(_event: any): void {
    alert("Button 2 second debounced");
    this.go();
  }

  go(){
    console.log("yes")
  }
}