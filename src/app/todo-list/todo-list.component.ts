import { Component, OnInit } from '@angular/core';
import { doneTodo } from '../doneTodos';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent  implements OnInit {

  totalTasks!: number;
  taskTitle!: string;
  localItem1 :any;
  localItem2 :any;
  todo:any;
  todos:Todo[];
  donetodos : doneTodo[];
 
  constructor()
  {
    this.localItem1 = localStorage.getItem("todos");
    this.localItem2 = localStorage.getItem("donetodos");

    console.log('local item for todo : ',this.localItem1);
    console.log('local item for donetodo : ',this.localItem2);

    if(this.localItem1 == null && this.localItem2 == null){
      this.todos = [];
      this.donetodos = [];
    }else{
      this.todos = JSON.parse(this.localItem1);
      this.donetodos = JSON.parse(this.localItem2);
    }
  }

  ngOnInit():void{}

  addTodo(todo : Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    console.log(todo);
  }  

  deleteItem(i :number){
    console.log('delete index : ',i);
    this.todos[i].active = !this.todos[i].active;
    this.todos.splice(i, 1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    console.log('todo after deletion : ',this.todos);
  }

  deleteDoneItem(i :number){
    console.log('delete done index : ',i);
    this.donetodos[i].active = !this.donetodos[i].active;
    this.donetodos.splice(i, 1);
    localStorage.setItem("donetodos",JSON.stringify(this.donetodos));
    console.log('Done todo after deletion : ',this.donetodos);
  }

  toggleTodo(todo: Todo){
    console.log('This todo : ',todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = false;
    this.donetodos.push(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    localStorage.setItem("donetodos",JSON.stringify(this.donetodos));
    console.log('DoneTodo After Push ',this.donetodos);
    console.log('Updated Todos Array : ',this.todos);
  }

  showPersonal(){}

  showWork(){}

  showTravel(){}

  showHealth(){}

  addCategory(){}


}
