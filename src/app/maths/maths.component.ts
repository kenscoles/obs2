import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon'; 
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-maths',
  standalone: true,
  imports: [NgStyle, FormsModule, MatButtonModule, MatGridListModule, MatIconModule],
  templateUrl: './maths.component.html',
  styleUrl: './maths.component.css'
})
export class MathsComponent implements OnInit{
  ngOnInit(): void {
    this.getData();
  }
  rand = 0; operation: string = ""; symbol = ""
  a = 0; b = 0; c = 0
  question: any = ""
  myTries = signal(0);
  myCorrect = signal(0);
  myKeys: string[] = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"]
  theAnswer = signal("")
  answer = signal<string>("")
  isCorrect = computed(() => this.answer() == this.c.toString());
  isWrong = computed(() => this.answer().length >= this.c.toString().length &&
   this.answer() != this.c.toString())  ;
  color = computed(() => this.isCorrect()  ? 'green' : 'red');

  addDigit(digit: string) {
    this.answer.set(this.answer() + digit)
    if (this.isCorrect()){
      this.myCorrect.update((qty) => qty + 1);
      this.myTries.update((qty) => qty + 1); 
    }
    else if (this.isWrong()){
      this.myTries.update((qty) => qty + 1);
    }
  }
  clear() { // removes last character from current answer
    let str = this.answer();
    str = str.substring(0, str.length - 1);
    this.answer.set(str)// will trigger signal change
  }
  getRandomInt(min: number, max: number) {
    return Math.round((min - 0.5) + Math.random() * (max - min + 1));
  }
  getData(){
    this.answer.set(""); // reset to blank
    this.rand = this.getRandomInt(0, 3) // get random no for which operation
    this.operation = this.op[this.rand].name // get op name
    this.symbol = this.op[this.rand].symbol // get op symbol for display
    this.a = this.getRandomInt(this.op[this.rand].min, this.op[this.rand].max) // select 2 numbers as
    this.b = this.getRandomInt(this.op[this.rand].min, this.op[this.rand].max) // appropriate to operation
    if (this.rand < 2) { // add or subtract
      this.c = this.a + this.b  // add a and b to calculate c
    }
    else { // multiply or divide
      this.c = this.a * this.b // multiply a and b to calculate c
    }
    if (this.operation == "subtract" || this.operation == "divide") {
      var temp = this.a // swap a and c
      this.a = this.c
      this.c = temp
    }
    this.theAnswer.set(this.c.toString())
    this.question=({
      symbol: this.symbol,
      a: this.a, b: this.b, c: this.c
    })
  }
  op = [
    {
      "id": 1,
      "name": "add",
      "symbol": "+",
      "min": 1,
      "max": 50
    },
    {
      "id": 2,
      "name": "subtract",
      "symbol": "-",
      "min": 1,
      "max": 50
    },
    {
      "id": 3,
      "name": "multiply",
      "symbol": "x",
      "min": 2,
      "max": 12
    },
    {
      "id": 4,
      "name": "divide",
      "symbol": "÷",
      "min": 2,
      "max": 12
    }
  ]
}
