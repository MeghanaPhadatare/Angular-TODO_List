import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TODO } from '../todo';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  @Input() public parentItem: any ;
  @Output() public remove = new EventEmitter(); 
  todoList!: TODO[];

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }
  
  removeitem(id:number){  
    //this.remove.emit(id + ": Index Item Deleted");

     this.todoList = this.todoList.filter((v, i) => i !== id);  
    //this.todoList = this.todoList.splice(id,-1);  
}
}


