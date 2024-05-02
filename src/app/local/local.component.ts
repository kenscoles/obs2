import { Component, inject } from '@angular/core';
import { LocalService } from '../shared/services/local.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-local',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, MatSelectModule],
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
    lastUsed: ""
  });

  //  myData: any = [];
  myStored: any = [];
  myLog:string[] = []

  ngOnInit(): void { // read in stored values
    var myStored = JSON.parse(this.localStore.getData('myData')!)
    this.myLog = JSON.parse(this.localStore.getData('log')!)
    var lastItem:string = this.myLog[this.myLog.length-1]
    
    this.myForm.patchValue({
      firstName: myStored.firstName,
      lastName: myStored.lastName,
      colour: myStored.colour,
      lastUsed: lastItem
    })

  }

  onSubmit() {
    const myTime = this.pipe.transform(Date.now(), 'medium')!;
   
    this.myLog.push(myTime)
    console.log(this.myForm.value)
    this.localStore.saveData('myData', JSON.stringify(this.myForm.value))
    this.localStore.saveData('log', JSON.stringify(this.myLog))
  }
  
  test() {
  this.localStore.removeData('lastUsed')
  }

  test2(){
    
  }
}
