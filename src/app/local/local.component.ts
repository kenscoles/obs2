import { Component, inject } from '@angular/core';
import { LocalService } from '../shared/services/local.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-local',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, MatSelectModule],
  templateUrl: './local.component.html',
  styleUrl: './local.component.css'
})
export class LocalComponent {

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
  used = ""

  ngOnInit(): void { // read in stored values
    this.myStored = JSON.parse(this.localStore.getData('myData')!)
    this.used = JSON.parse(this.localStore.getData('lastUsed')!)
    this.myForm.patchValue({
      firstName: this.myStored.firstName,
      lastName: this.myStored.lastName,
      colour: this.myStored.colour,
      lastUsed: this.used
    })
var myTime = Date()
console.log("Date:", myTime) 
  }

  onSubmit() {
    console.log(this.myForm.value)
    this.localStore.saveData('myData', JSON.stringify(this.myForm.value))
    this.localStore.saveData('lastUsed', JSON.stringify(Date()))
  }
}
