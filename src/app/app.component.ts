import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  template: `
    <app-todo-form></app-todo-form>
    <app-todo-list></app-todo-list>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
}) export class AppComponent implements OnInit {
  title = 'todo-list';
  
  todo: string;

  constructor() { }

  ngOnInit() {
    
  }

  // title = 'To-do List';
}