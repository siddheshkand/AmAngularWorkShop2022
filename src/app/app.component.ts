import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';

  counter = 0;

  increase(){
    this.counter = this.counter + 1;
  }

  decrease(){
    this.counter = this.counter - 1;
  }

  height = 0;
  weight = 0;

  
}
