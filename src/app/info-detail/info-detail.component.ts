import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-info-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, MatButtonModule],
  template: `
    <p>
      @if(show()){
        <p>ID : {{record.id}}</p>
        <p>Category : {{record.category}}</p>
        <p>Topic : {{record.topic}}</p>
        <p>Text : {{record.text}}</p>
        <p>Updated : {{record.updated}}</p>
      }
    </p>
    <button mat-flat-button color="primary" [routerLink]="['/profile']">back</button>
  `,
  styles: ``
})
export class InfoDetailComponent {
  profileService = inject(ProfileService)
  id = input.required<string>();
  record: any
  show = signal(false)

  ngOnInit(): void{
    //console.log("id is", this.id())
    this.record = this.getDataById(this.id())
    if (Object.keys(this.record).length !== 0){ // checks if object not empty
      this.show.set(true)
    }
  }
  getDataById(id: string): any {  // filters the data to extract the rec with matching id
    return this.profileService.infoSignal().find((x: { id: any; }) => x.id === id);
  }
  
}
