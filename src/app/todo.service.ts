import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from './models/task.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  private todoSubject = new Subject<Task[]>();
  todoList$ = this.todoSubject.asObservable();


  todoList: Task[] = [];

  addTodo(todo: string) {
    if(todo){
      this.todoList.push({title:todo, id: this.todoList.length-1,isDone: false});
      
    }
    
    this.todoSubject.next(this.todoList);

    console.log(this.todoList);
  }

  deleteTodo(index: number) {
    // TODO: Implement me

  }
}
