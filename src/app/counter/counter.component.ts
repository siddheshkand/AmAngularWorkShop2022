import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  counter = 0;

  increase(){
    this.counter = this.counter + 1;
  }

  decrease(){
    this.counter = this.counter - 1;
  }
}
