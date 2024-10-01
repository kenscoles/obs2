import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee, Person } from '../models/person';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  /* getPeople(): Observable<Person[]> {
    console.log('getPeople '+this.baseURL + 'people')
    return this.http.get<Person[]>(`${this.baseURL}url`)///people
    .pipe(
      catchError((err) => {
        console.log('error caught in service')
        //console.error(err);
        return throwError(() => new Error(err.message))
      })
    )
  } */
  getPeople(): Observable<Employee[]> {
    console.log('getPeople '+this.baseURL + 'url')
    return this.http.get<Employee[]>(`${this.baseURL}url`)///people
    .pipe(
      catchError((err) => {
        console.log('error caught in service')
        //console.error(err);
        return throwError(() => new Error(err.message))
      })
    )
  }

  addPerson(person:Employee): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post(`${this.baseURL}url`, body,{'headers':headers})
  }

  deletePerson(id:string): Observable<any> {
    //id = '999';// for error testing
    const headers = { 'content-type': 'application/json'};
    console.log(this.baseURL + 'url/'+id);////////people
    return this.http.delete(`${this.baseURL}url/${id}`, {'headers':headers})////people
    .pipe(
      catchError((err) => {
        console.log('error caught in service')
        //console.error(err);
        return throwError(() => new Error(err.message))
      })
    )
  }
  updatePerson(person: Employee): Observable<any>{
    const id = person.id;
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(`Service: ${body}`)
    return this.http.put(`${this.baseURL}url/${id}`, body,{'headers':headers})
  }

}