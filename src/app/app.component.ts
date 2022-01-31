import { Component } from '@angular/core';
import { TODO } from './todo';

@Component({
  selector: 'app-root',
  template:`
  
   <h1>
    Welcome to {{ title }}!
  </h1> 

  <h2> {{msg}} </h2>
   
  <h2> <app-list-component (remove) ="msg=$event" [parentItem] = "fruitlist"></app-list-component> </h2>

  <!-- <ul>
    <li *ngFor="let todoItem of todoList">
      {{ todoItem.title }} 
     
    </li>
  </ul>  -->

  
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO_List';
  public fruitlist = "My Fruit List";
  public msg = "";
}
