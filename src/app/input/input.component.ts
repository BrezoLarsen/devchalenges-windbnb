import { Component, Input, OnInit } from '@angular/core';
import { StaysService } from '../stays.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() showLabel: boolean = false;
  @Input() isBlock: string = '';
  @Input() valueLocation: string = '';
  @Input() isPopUp: string = '';

  public valueAdults: number = 0;
  public valueChilds: number = 0;
  public valueGuests: number;

  constructor(public staysService: StaysService) { }

  ngOnInit(): void {
    this.staysService.setAvailablesCities();
  }

  getCity(city) {
    this.valueLocation = city;
  }

  getValueGuests() {
    this.valueGuests = this.valueAdults + this.valueChilds;
  }

  setIncrementAdults() {
    this.valueAdults++;
    this.getValueGuests();
  }

  setDecrementAdults() {
    if (this.valueAdults <= 0) { return; }
    this.valueAdults--;
    this.getValueGuests();
  }

  setIncrementChilds() {
    this.valueChilds++;
    this.getValueGuests();
  }

  setDecrementChilds() {
    if (this.valueChilds <= 0) { return; }
    this.valueChilds--;
    this.getValueGuests();
  }

}
