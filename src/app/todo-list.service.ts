import { Injectable } from '@angular/core';
import { TODO } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: TODO[] = [
    {title: 'PINK', date: '4-2-2022'},
    {title: 'BLUE', date: '4-2-2022'},
    {title: 'RED', date: '4-2-2022'},
    {title: 'WHITE', date: '4-2-2022'},
    {title: 'BLACK', date: '4-2-2022'},
    {title: 'ORANGE', date: '4-2-2022'},
  ];


  constructor() { }

  getTodoList() {
    return this.todoList;
  }
  

}
