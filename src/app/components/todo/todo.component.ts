import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo';
import { ToDoResponseModel } from 'src/app/models/ToDoRespondeModel';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todos: ToDo[] = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getToDos();
  }

  getToDos() {
    this.httpClient.get<ToDo[]>(this.apiUrl).subscribe((response) => {
      this.todos = response;
    });
  }
}
