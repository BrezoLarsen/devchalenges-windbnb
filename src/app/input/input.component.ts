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
  public valueGuests: number;

  constructor(public staysService: StaysService) { }

  ngOnInit(): void {
    this.staysService.setAvailablesCities();
  }

  getCity(city) {
    this.valueLocation = city;
  }



}
