import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  changeInputState() {
  }

}
