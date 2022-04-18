import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'practice-app';
  count = 0;

  constructor() {
    setInterval(() => {
      this.count++;
    }, 1000);
  }
}
