import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task.models';

@Component({
  selector: 'app-particular-todo-form',
  template: `
    <form action='' name= 'edit-todo'>
      <div>
        <label for="title">Title</label>
        <input type="text" name="title" [(ngModel)]="todo.title"/>
      </div>
      <div>
        <label for="description">Description</label>
        <input type="text" name="description" [(ngModel)]="todo.description"/>
      </div>
      <div>
        <label for="author">Author</label>
        <input type="text" name="author" [(ngModel)]="todo.author"/>
      </div>
      <div>
        <label for="isDone">Is Done?</label>
        <input type="checkbox" name="isDone" [(ngModel)]="todo.isDone"/>
      </div>
    </form>
  `,
  styleUrls: ['./particular-todo-form.component.scss']
})
export class ParticularTodoFormComponent implements OnInit {

  constructor() { }

  @Input() todo: Task;

  ngOnInit() {
  }

}
