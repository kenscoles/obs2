import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../shared/services/api.service';
import { Person, Employee } from '../shared/models/person';
import { catchError, finalize, throwError } from 'rxjs';

@Component({ selector: 'app-jserver',
    standalone: true,
    templateUrl: './jserver.component.html',
    styleUrl: './jserver.component.css',
    imports: [CommonModule, FormsModule],
    })
export class JserverComponent implements OnInit {

  apiService = inject(ApiService)
  title = 'httpGet Example';
  people?:Employee[];////////////////////////
  person = new Employee();
  status?:any;

  ngOnInit(): void {
    this.refreshPeople();
    this.status = 'data loaded';
    console.log("new employee:", this.person)
  }

  refreshPeople() {
    this.apiService.getPeople()
    .pipe(
      catchError((err) => {
        console.log('error caught in component')
        //console.error(err);
        return throwError(() => new Error(err.message))
      })
    )
    .subscribe({
      next: data => {
          //this.status = 'data loaded';
          this.people=data;
      },
      error: (error: { message: any; }) => {
          this.status = error.message;
          console.error('There was an error!', error);
      }    
  });      
  }
 
  addPerson() {
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        console.log(data);
        this.refreshPeople();
        this.status = 'new record created';
      })      
  }
  
    deletePerson(id:any) {
    this.apiService.deletePerson(id)
    .pipe(
      catchError((err) => {
        console.log('error caught in component')
        //console.error(err);
        return throwError(() => new Error(err.message))
      }),
      finalize(() => {
        //this.person=new Person();
        console.log ('called within finalize')
      })
    )
    .subscribe({
      next: data => {
          this.status = 'Delete successful';
          this.refreshPeople();
      },
      error: (error: { message: any; }) => {
          this.status = error.message;
          console.error('There was an error!', error);
      }    
  });

  } 
  updatePerson(person:Employee) {
    //this.person.id = id;
    this.apiService.updatePerson(person)
    .subscribe({
      next: data => {
          this.status = 'update successful';
          this.refreshPeople();
          this.person = new Employee();// re-initialise
      },
      error: (error: { message: any; }) => {
          this.status = error.message;
          console.error('There was an error!', error);
      }    
  });
  }
  /* updatePerson(id:any) {
    this.person.id = id;
    this.apiService.updatePerson(this.person)
    .subscribe(data => {
      console.log(data);
      this.refreshPeople();
      this.status = 'record updated';
      this.person = new Person();// re-initialise
    })
  } */
}