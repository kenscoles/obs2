import { Component, inject } from '@angular/core';
import { LocalService } from '../shared/services/local.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { DatePipe } from '@angular/common';
import { AOpComponent } from '../a-op/a-op.component';

@Component({
  selector: 'app-local',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, MatSelectModule, AOpComponent],
  templateUrl: './local.component.html',
  styleUrl: './local.component.css'
})
export class LocalComponent {
  pipe = new DatePipe('en-UK'); // Use your own locale

  localStore = inject(LocalService)
  fb = inject(FormBuilder)

  myForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    colour: [null, Validators.required],
    lastUpdated: [null]
  });

  //  myData: any = [];
  myStored: any = [];
  //myLog:string = ''

  ngOnInit(): void { // read in stored values
    var myStored = JSON.parse(this.localStore.getData('myData')!)
    console.log("read from local", myStored)


    this.myForm.patchValue({
      firstName: myStored.firstName,
      lastName: myStored.lastName,
      colour: myStored.colour,
      lastUpdated: myStored.lastDate
    })

  }

  onSubmit() {
    const myTime = this.pipe.transform(Date.now(), 'medium')!;
    var myArray = { ...this.myForm.value, 'lastDate': myTime }
    console.log(myArray)
    this.localStore.saveData('myData', JSON.stringify(myArray))
  }

  test() {
    var before = { foo: "bar" };
    var current = before;
    current.foo = "hello";
    console.log(before, current)
    console.log(before === current);
    // => true
  }

  test2() {
    var before = { foo: "bar" };
    var current = before;
    current = { foo: "hello" };
    console.log(before, current)
    console.log(before === current);
    // => false
  }
}
