import { Component, OnInit } from '@angular/core';
import { StaysService } from './stays.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'windbnb';
  public showPopup: boolean = false;
  public places: any = [];

  constructor(public staysService: StaysService) { }

  ngOnInit(): void {
    this.staysService.getStays();
  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup(value: boolean) {
    this.showPopup = value;
  }
}
