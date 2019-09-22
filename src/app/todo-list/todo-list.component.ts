import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Task } from '../models/task.models';

@Component({
  selector: 'app-todo-list',
  template: `
    <ol>
      <li *ngFor="let task of todoList; let i = index">
      <span>{{task.title}}</span>
      <a [routerLink]="'todo-details/'+i">go to</a>
      </li>
    </ol>
  `,
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: Task[] = [];
  constructor(private todoserv: TodoService) { }

  ngOnInit() {
    this.todoserv.todoList$.subscribe(nextList => this.todoList = nextList);
  }

}
