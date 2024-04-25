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
myData: any = []
ngOnInit(): void {
  
}
readStorage(){
  var myId = this.localStore.getData('id')
  var arr = this.localStore.getData('user')
  console.log("myId: ", myId)

}
writeStorage(){
this.myData = [{'name':'Ken', 'surname': 'Coles'}]

  this.localStore.saveData('name', 'Ken')
}
}
