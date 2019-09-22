import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  template: `
  <form> 
    <input name='input' type="text"[(ngModel)]='todo'/>
    <button type="submit"(click)="handleAddTodo()">Submit</button>
  </form>
  `,
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  todo: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {

  }

  handleAddTodo() {
    this.todoService.addTodo(this.todo);
    this.todo='';
  }


}
