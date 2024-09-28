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
  templateUrl: './profile.component.html',
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
  fetchInfo2() {
    this.profileService.getRecords2("a")
  }
  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.profileService.getRecords2(value)
  }
  onSubmit(event: any) {
    event.preventDefault();
    console.log(event.target.customerName.value);
    this.profileService.getRecords2(event.target.customerName.value)
  }
}
