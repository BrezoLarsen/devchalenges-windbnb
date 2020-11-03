import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'windbnb';
  public showPopup: boolean = false;

  openPopup() {
    this.showPopup = true;
  }
}
