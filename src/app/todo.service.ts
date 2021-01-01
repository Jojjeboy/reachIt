import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { LocalStorageService } from './local-storage.service';
import { UUIDService } from './uuid.service';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  config: any;

  constructor(private localStorageService: LocalStorageService, private uUIDService: UUIDService) {
    this.config = this.localStorageService.getConfig();
  }


  addTodo(todo: Todo): void {
    // check if entry is in config
    // add entry if it doesn't exist
    if(!this.config.todo){
      this.config["todo"] = [];
    }

    // add the todo to the config
    this.config.todo.push(this.convertToLsObject(todo));

    // save the config
    this.localStorageService.saveConfig(this.config);

  }
  
  updateTodo(todo: Todo): void {

  }
  
  removeTodo(todo: Todo): void {

  }

  getEmptyTodo() {
    return new Todo(
      null, // title
      null, // description
      3, // prio
      new Date(), // updated
      this.uUIDService.UUID() // uuid
    );
  }

  getTodos(): Array<Todo> {
    if(!this.config.todo) {
      this.config["todo"] = [];
    }
    return this.convertLSToTodos(this.config.todo);
    
  }

  convertLSToTodos(localStorageTodos: Array<any>): Array<Todo>{
    const todos = new Array<Todo>();
    for (const obj of localStorageTodos) {
      let todo = new Todo(obj.title, obj.description, obj.prio, obj.updated, obj.uuid);
      todo.setUpdated(new Date(todo.getUpdated()));
      todos.push(todo);
    }
    return todos;
  }

  convertToLsObject(object: Object): Object {
    const po = Object.assign({}, object);
    return po;
  }

}
