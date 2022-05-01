import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todoInput = "";

  todoItems = [
  ];

  add() {
    this.todoItems.push(this.todoInput);
    this.todoInput = "";
  }

  delete(index: number) {
    this.todoItems.splice(index, this.todoInput.length + 1)
  }
}
