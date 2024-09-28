// profile.service.ts
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry, of, Subscription, Observable } from 'rxjs';
import { InfoRecord } from '../models/info';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfileSignal = signal<any | null>(null); // set null initial value
  infoSignal = signal<InfoRecord[]>([]); // set empty initial value
  infoSignal2 = signal<any[]>([]); // set empty initial value
  userProfileSignal2 = signal<any | null>(null); // set null initial value
  mySub: Subscription | undefined
  mySub2: Subscription | undefined
  mySub3: Subscription | undefined
  mySub4: Subscription | undefined
  url: string = '';
  baseUrl: string = 'http://localhost/'; //'http://192.168.1.199/

  constructor(private http: HttpClient) { 
    this.getRecords()
  }

  fetchProfile() {
    console.log('trigger fetchProfile');
    var $obs = this.http
      .get<any>(`https://jsonplaceholder.typicode.com/users`)
      .pipe(
        retry(3),
        catchError((error) => {
          console.log('Error fetching profile:', error.status);
          return of(error.statusText);
        })
      )
    this.mySub = $obs.subscribe(profile => {
      console.log('API Response:', profile)
      this.userProfileSignal.set(profile);
      console.log('set userProfileSignal', this.userProfileSignal());

    })
  }
  ///
  fetchSingleProfile(id: string): void {
    console.log('trigger fetchProfile');
    var url = `https://jsonplaceholder.typicode.com/users/${id}`
    var $obs = this.http
      .get<any>(url)
      .pipe(
        retry(3),
        catchError((error) => {
          console.error('Error fetching profile:', error);
          return of(1);
        })
      )
    this.mySub2 = $obs.subscribe(profile => {
      console.log('API Response:', profile)
      this.userProfileSignal2.set(profile);
      console.log('set SingleProfileSignal', this.userProfileSignal2());
    })
    // subscribe to a signal to receive updates.     
  }
  ///
  clearUp() {
    this.mySub?.unsubscribe()
    this.mySub2?.unsubscribe()
    this.mySub3?.unsubscribe()
    this.mySub4?.unsubscribe()
    console.log("subs unsubscribed")
  }

  getRecords() {
    console.log('trigger fetchInfo');
    this.url = `${this.baseUrl}PDO3/selectAll.php`;
     var $obs = this.http
      .get<InfoRecord[]>(this.url)
      .pipe(
        retry(3),
        catchError((error) => {
          console.error('Error fetching profile:', error);
          return of(1);
        })
      )
    this.mySub3 = $obs.subscribe((profile): void => {
      console.log('API Response:', <InfoRecord[]>profile)
      //this.infoSignal.set(<InfoRecord[]>profile);
      this.infoSignal.set(<InfoRecord[]>profile);
      console.log('set infoSignal', this.infoSignal());
    })
  }
  /////
  
  getRecords2(search:string) {
   //var search = "Dan"
    console.log('trigger fetchdata');
    this.url = `http://localhost:3000/user/${search}`;
     var $obs = this.http
      .get<any[]>(this.url)
      .pipe(
        retry(3),
        catchError((error) => {
          console.error('Error fetching data:', error);
          return of( [{ id: "NONE", name: "NOT FOUND","email": "ERROR", "phone":error.statusText}]);
        })
      )
    this.mySub4 = $obs.subscribe((profile): void => {
      console.log('API Response:', <any[]>profile)
      this.infoSignal2.set(<any[]>profile);
      console.log('set infoSignal2', this.infoSignal2());
    })
  }
  /////
}