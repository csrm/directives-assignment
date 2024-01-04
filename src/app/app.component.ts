import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonText = "Display Details";
  displayPara = false;
  array = [];
  count = 0;
  onButtonClick() {
    this.displayPara = !this.displayPara;
    if(this.displayPara) {
      this.buttonText = "Hide Details";
    } else {
      this.buttonText = "Display Details";
    }
    this.array.push(++this.count);
  }
}
