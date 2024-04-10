import { Component, signal } from '@angular/core';
import { KeyboardComponent } from '../keyboard/keyboard.component';
@Component({
  selector: 'app-kb-test',
  standalone: true,
  imports: [KeyboardComponent],
  templateUrl: './kb-test.component.html',
  styleUrl: './kb-test.component.css'
})
export class KbTestComponent {

  digit = signal("")
  text = signal("")

  showDigit($event: string): void {
    console.log("rec in test: ", $event)

    if ($event == "del") {
      let str = this.text();
      str = str.substring(0, str.length - 1);
      this.text.set(str)// will trigger signal change
      this.digit.set($event)  
    }
    else {
      this.digit.set($event)
      this.text.set(this.text() + $event)
    }

  }

}
