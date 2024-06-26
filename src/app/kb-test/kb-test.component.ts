import { Component, OnInit, signal } from '@angular/core';
import { KeyboardComponent } from '../shared/components/keyboard/keyboard.component';
import { IsEvenComponent } from '../shared/components/is-even/is-even.component';
@Component({
  selector: 'app-kb-test',
  standalone: true,
  imports: [KeyboardComponent, IsEvenComponent],
  templateUrl: './kb-test.component.html',
  styleUrl: './kb-test.component.css'
})
export class KbTestComponent implements OnInit{
  
  ngOnInit(): void {}

  digit = signal("") // single value as string
  text = signal("") // accumulated string
  result = signal(0) // accumulated string as number
  

  showDigit($event: string): void {
    console.log("event received: ", $event)

    if ($event == "del") {
      let str = this.text();
      str = str.substring(0, str.length - 1);
      this.text.set(str)// will trigger signal change  
    }
    else {
      this.text.set(this.text() + $event)
    }
    this.digit.set($event)
    this.result.set(Number(this.text()))   // emits when signal changes
  }

}
