import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'app-profile-detail',
  standalone: true,
  imports: [],
  templateUrl: './profile-detail.component.html',
  styleUrl: './profile-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDetailComponent {
  profileService = inject(ProfileService)
  id = input.required<string>();
  mySignal = this.profileService.userProfileSignal2

  ngOnInit(): void{
    console.log("id is", this.id())
    this.profileService.fetchSingleProfile(this.id());
  }
  
}
