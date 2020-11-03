import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closePopup() {
    this.closeEvent.emit(false);
  }

}
