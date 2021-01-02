import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo;
  todos: Array<Todo>;
  editMode: boolean = false;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.refreshUi();
  }
  
  
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.refreshUi();
  }
  
  editTodo(todo: Todo) {
    this.todo = todo;
    this.editMode = true;
  }
  
  updateTodo(): void{
    this.todoService.updateTodo(this.todo);
    this.refreshUi();
  }

  removeTodo(): void{
    this.todoService.removeTodo(this.todo.getUuid());
    this.refreshUi();
  }

  refreshUi(): void{
    this.todo = this.todoService.getEmptyTodo();
    this.todos = this.todoService.getTodos().sort(function(a, b) { 
      return a.prio - b.prio;
    });

    this.editMode = false;
  }

  valid(): boolean{
    return (this.todo.title != null && this.todo.title != '') && (this.todo.description != null && this.todo.description != '');
  }




}
