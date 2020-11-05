import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StaysService {

  public places: any = [];
  public availablePlaces: any = [];
  public showPopup: boolean = false;
  public buttonCleanFilters: boolean = false;

  constructor(private httpClient: HttpClient) { }

  getStays() {
    this.httpClient.get("assets/stays.json").subscribe(data => {
      this.places = data;
      this.availablePlaces = this.places;
    })
  }

  async applyFilters(valueLocation?, valueGuests?) {
    this.availablePlaces = this.places;
    if (valueLocation != '') {
      this.availablePlaces = this.availablePlaces.filter(place => {
        return place.city.toLowerCase().indexOf(valueLocation.toLowerCase()) > -1;
      });
    }
    if (valueGuests != undefined) {
      this.availablePlaces = this.availablePlaces.filter(place => {
        return place.maxGuests >= valueGuests;
      });
    }
    this.closePopup(false);
    this.setVisibilityOfButtonClean();
  }

  closePopup(value: boolean) {
    this.showPopup = value;
  }

  setVisibilityOfButtonClean() {
    if (this.availablePlaces < this.places) {
      this.buttonCleanFilters = true;
    } else {
      this.buttonCleanFilters = false;
    }
  }

  cleanFilters() {
    this.availablePlaces = this.places;
    this.buttonCleanFilters = false;
  }
}
