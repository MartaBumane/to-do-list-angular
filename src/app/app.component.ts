import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  template: `
  <app-todo-form></app-todo-form>

  <div *ngFor="let task of todoList">{{task}}</div>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
}) export class AppComponent implements OnInit {
  title = 'todo-list';
  todoList: string[] = [];
  todo: string;

  constructor(private todoserv: TodoService) { }

  ngOnInit() {
    this.todoserv.todoList$.subscribe(nextList => this.todoList = nextList);
  }

  // title = 'To-do List';
}