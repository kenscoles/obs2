import { Component, inject } from '@angular/core';
import { LocalService } from '../shared/services/local.service';

@Component({
  selector: 'app-local',
  standalone: true,
  imports: [],
  templateUrl: './local.component.html',
  styleUrl: './local.component.css'
})
export class LocalComponent {
  localStore = inject(LocalService)
  myData: any = [];
  myStored: any = [];
  ngOnInit(): void {

  }
  readStorage() {
    var myName = this.localStore.getData('name')
    this.myStored = JSON.parse(this.localStore.getData('myData')!)
    console.log(`myName:${myName}`)
    console.log(`stored data first:${this.myStored.name}`)
    console.log(`stored data surname:${this.myStored.surname}`)
  }
  writeStorage() {
    var name = "Danny"
    this.myData = { 'name': name, 'surname': 'Coles' }
    this.localStore.saveData('myData', JSON.stringify(this.myData))
    this.localStore.saveData('name', 'Ken')
  }
}
