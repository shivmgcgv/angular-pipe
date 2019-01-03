import { Component } from '@angular/core';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  box = {
    id: 1,
    name: 'box1',
    area: 150
  }

  date;

  constructor() {
    this.date = Date.now();
  }

}
