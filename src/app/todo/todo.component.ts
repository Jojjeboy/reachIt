import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { UUIDService } from '../uuid.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo;
  todos: Array<Todo>;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todo = this.todoService.getEmptyTodo();
    this.todos = this.todoService.getTodos();
  }
  
  
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = this.todoService.getEmptyTodo();
    this.todos = this.todoService.getTodos();
  }

  valid(): boolean{
    return (this.todo.title != null && this.todo.title != '') && (this.todo.description != null && this.todo.description != '');
  }




}
