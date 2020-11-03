import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'windbnb';
  public showPopup: boolean = false;
  public places: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/stays.json").subscribe(data => {
      this.places = data;
      console.log(this.places);
    })
  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup(value: boolean) {
    this.showPopup = value;
  }
}
