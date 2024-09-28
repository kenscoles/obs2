import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, Injector, Signal, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Observable, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signals3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals3.component.html',
  styleUrl: './signals3.component.css'
})
export class Signals3Component {

  http = inject(HttpClient);

  mySig = signal<any[]>([])
  searchSig = signal<string>('');
  
  articles$ = toObservable(this.searchSig).pipe(
    debounceTime(1000),
    distinctUntilChanged(),
    switchMap((searchTerm) =>
      this.http.get<any>( // used as response is not iterable
        `https://kenscoles.github.io/test/db.json`)
    )
  );

  articlesSig = toSignal(this.articles$);
//newSig = signal<any |undefined>(undefined)
newSig: Signal<any | undefined> | undefined;   
/* newSig = toSignal( this.http
    .get<any>('https://kenscoles.github.io/test/db.json')
    .pipe(map(result => result.posts)))
   */  
  search(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchSig.set(value)
    console.log("result:", this.searchSig())
  }
  //////////
  #destroyRef = inject(DestroyRef)
  tryData() {
    this.http
      .get<any>('https://firestore.googleapis.com/v1/projects/kenctest/databases/(default)/documents/users')
      .pipe(takeUntilDestroyed(this.#destroyRef)) //this.#destroyRef has to be inserted here
      .pipe(map(result => result.documents))
      .subscribe((res) => this.mySig.set(res))
  }
  private injector = inject(Injector);
  test(){ // is it worth all this just to use toSignal and not subscribe????
    this.newSig = toSignal( this.http
      .get<any>('https://kenscoles.github.io/test/db.json')
      .pipe(map(result => result.posts)),{injector:this.injector})

  }
}