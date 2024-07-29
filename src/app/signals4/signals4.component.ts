import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Observable, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { CommonModule, formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-signals4',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule ],
  templateUrl: './signals4.component.html',
  styleUrl: './signals4.component.css'
})
export class Signals4Component {
  http = inject(HttpClient);
  mySig = signal<any[]> ([]);
  single = signal<any>("")
//
 isodate = new Date("2024-07-22T21:42:36.514Z");
 localedateformat = this.isodate.toLocaleDateString('en-GB');
//
showData = signal(true)
showSingle = signal(false)
//
readonly firstPage = 1;
  itemsPerPage = 5;

  searchInput = signal('');
  currentPage = signal(this.firstPage);

  isNextPageNotAvailable = computed(() => {
    const filterProducts = this.mySig()
      .filter((item) =>
        item.fields.First.stringValue.toLowerCase().includes(this.searchInput().toLowerCase())
      )
    console.log("filterProducts length", filterProducts.length)
    console.log("curr page", this.currentPage())
    console.log("items per page", this.itemsPerPage)
      return filterProducts.length <= (this.currentPage()) * this.itemsPerPage;
  });

filteredProducts = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.mySig()
      .filter((item) =>
      item.fields.First.stringValue.toLowerCase().includes(this.searchInput().toLowerCase())
      )
      .slice(startIndex, endIndex);
  });

  searchProduct(searchText: string): void {
    this.searchInput.set(searchText);
    if (this.currentPage() > this.firstPage) {
      this.currentPage.set(this.firstPage);
    }
  }

  goToPrevPage(): void {
    this.currentPage.update((currentPage) => Math.max(currentPage - 1, 1));
  }

  goToNextPage(): void {
    this.currentPage.update((currentPage) =>
      Math.min(currentPage + 1, this.itemsPerPage + 1)
    );
  }
//
toggleShow(){
  this.showData.set(!this.showData())
}

  tryData(): void {
    this.http
      .get<any>('https://firestore.googleapis.com/v1/projects/kenctest/databases/(default)/documents/users')
      .pipe(map(result => result.documents))
      .pipe(
        map((note) => note.map((n: { createTime: any; updateTime: any; }) => ({
          ...n,
          created: new Date(n.createTime).toLocaleString('en-GB'),
          updated: new Date(n.updateTime).toLocaleString('en-GB')
        }))
        )
      )
      .subscribe((res:any[]) => this.mySig.set(res))
      
  }
  test(){
    var isodate = new Date("2024-05-16T13:37:17.731322Z");
    var localedateformat = isodate.toLocaleDateString('en-GB');
    console.log("date: ",localedateformat )   
  }
  
filter(data:string){
  console.log(data)
  this.single.set(data)
  //this.showData.set(false)
  this.showSingle.set(true) 
}
goBack(){
  this.single.set("")
  this.showData.set(true)
  this.showSingle.set(false)
}
}