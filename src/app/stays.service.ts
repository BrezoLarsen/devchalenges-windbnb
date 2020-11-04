import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StaysService {

  public places: any = [];
  public availablePlaces: any = [];

  constructor(private httpClient: HttpClient) { }

  getStays() {
    this.httpClient.get("assets/stays.json").subscribe(data => {
      this.places = data;
    })
  }

  setAvailablesCities() {
    this.availablePlaces = this.places.map(place => place.city).filter(
      (value, index, self) => self.indexOf(value) === index);
  }
}
