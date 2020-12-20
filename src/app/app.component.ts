import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface Todo {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  // `
  //   <ul *ngIf="todos$ | async as todos; else noData">
  //     <li *ngFor="let todo of todos">
  //       <span>Title: {{ todo.id }}</span> ——
  //       <span>Completed: {{ todo.name }}</span>
  //     </li>
  //   </ul>
  //   <ng-template #noData>No Data Available</ng-template>
  // `,
})
export class AppComponent implements OnInit {
  todos$: Observable<Todo[]>;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.todos$ = this.http
    //   .get<Todo[]>(
    //     // 'https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10'
    //     'http://127.0.0.1:8080/ping'
    //   )
      // .pipe(tap(console.log));
  }

  getlist(){
    this.todos$ = this.http
    .get<Todo[]>(
      // 'https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10'
      'http://127.0.0.1:8080/ping'
    ).pipe(tap(console.log));
  }
}
