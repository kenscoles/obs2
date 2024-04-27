import { Component, effect, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [MatButtonModule, MatGridListModule],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent {

  constructor() {
    /* 
    effect(() => {
      this.outputDigit.emit(this.keyPress());  // emits when signal changes
    }); */
  }

  outputDigit = output<string>()
  myKeys: string[] = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"]
  

  addDigit(item:string) {
    console.log("digit:", item)
    this.outputDigit.emit(item);
  }
}
