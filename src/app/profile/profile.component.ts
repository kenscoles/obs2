// profile.component
import { Component, ChangeDetectionStrategy, OnDestroy, signal, inject } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if(userProfile){
    @for (profile of myProfileSignal(); track profile.id; let i = $index){
      <button mat-flat-button [routerLink]="[profile.id]"> {{ profile.name}} </button>
      <h1>{{ profile.name }}</h1>
        <p>ID: {{ profile.id }}</p>
        <p>Username: {{ profile.username }}</p>
        <p>Email: {{ profile.email }}</p>
        <p>Address: {{ profile.address.street }}, {{ profile.address.suite }}, {{ profile.address.city }} {{ profile.address.zipcode }}</p>
        <p>Phone: {{ profile.phone }}</p>
        <p>Website: {{ profile.website }}</p>
        <p>Company: {{ profile.company.name }}</p>
        @if(i !== userProfile.length - 1){
          <hr />
        }
    }
    }
    
    <button (click)="fetchProfile()">Fetch Profile</button>
    <button (click)="fetchInfo()">Fetch Info</button>
    <div>
     <details>
      <summary>Info</summary> 
    @if(myInfoSignal()){
      @for (item of profileService.infoSignal(); track item.id;) {
      <p>ID: {{item.id}}  Category: {{item.category}} == Topic:  {{item.topic}}
      <button  mat-flat-button routerLink="/info-detail/{{item.id}}"> test </button></p>
      }
    }
    <h1>The summary element</h1>


</details>

    </div>
  `
})
export class ProfileComponent implements OnDestroy {

  userProfile: any;
  myInfoSignal = this.profileService.infoSignal // link to the Infosignal
  myProfileSignal = this.profileService.userProfileSignal
  //singleProfile: any = {};
  //singleProfile = signal({name:"none"}); // set null initial value
  user: any;

  constructor(public profileService: ProfileService) {
    this.profileService.fetchProfile();
    //this.profileService.fetchSingleProfile("1");
    this.profileService.getRecords()
  }
  ngOnDestroy(): void {
    this.profileService.clearUp() // unsubscribe in service
  }

  fetchProfile() {
    this.userProfile = this.profileService.userProfileSignal(); // triggers view
    console.log("SIG:", this.profileService.userProfileSignal())
  }

  fetchInfo() {
    this.profileService.getRecords()
  }
}
