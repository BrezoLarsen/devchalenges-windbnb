import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeInputState() {
    this.isActive = !this.isActive;
  }

}
