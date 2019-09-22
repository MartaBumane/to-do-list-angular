import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { Task } from '../models/task.models';

@Component({
  selector: 'app-todo-details',
  template: `
    <div *ngIf="!isEditing">
      <span class='line'
      [ngClass]="{'done-marker':!task.isDone}"
      
      
      >Title: {{task.title}}</span>
      <span *ngIf='task.isDone'> Is done</span>
      <span class='line'>Description: {{task.description}}</span>
      <span class='line'>Author: {{task.author}}</span>
    </div>


    <app-particular-todo-form *ngIf="isEditing" [todo]="task"></app-particular-todo-form>
    <button (click)="isEditing=!isEditing">{{"Swich to: "+ (isEditing ? "View":"Edit")}}</button>
  `,
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {
  todoIndex:number;
  task: Task;
  isEditing:boolean=false;

  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.todoIndex = parseInt(params.get('index'),10);
      this.task = this.todoService.todoList[this.todoIndex];

    });
  }

}
