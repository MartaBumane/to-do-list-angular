import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  private todoSubject = new Subject<string[]>();
  todoList$ = this.todoSubject.asObservable();


  todoList: string[] = [];

  addTodo(todo: string) {
    this.todoList.push(todo);
    this.todoSubject.next(this.todoList);

    console.log(this.todoList);
  }

  deleteTodo(index: number) {
    // TODO: Implement me

  }
}
