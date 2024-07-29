import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signals2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals2.component.html',
  styleUrl: './signals2.component.css'
})
export class Signals2Component {
  http = inject(HttpClient);

  searchSig = signal<string>('');
  articles$ = toObservable(this.searchSig).pipe(
    debounceTime(1000),
    distinctUntilChanged(),
    switchMap((searchTerm) =>
      this.http.get<ToDo[]>(  
   //`https://my-json-server.typicode.com/kenscoles/test/posts?id=${searchTerm}`
    `https://jsonplaceholder.typicode.com/todos?userId=${searchTerm}`
      )
    )
  );
  articlesSig = toSignal(this.articles$);
  
  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchSig.set(value)
    console.log("result:", this.searchSig())
  }

  
}
interface User {
  userId: number
  id: number
  title: string
  body: string
  /* ...other props */
}
interface ToDo {
  userId: number
  id: number
  title: string
  completed: boolean
  /* ...other props */
}