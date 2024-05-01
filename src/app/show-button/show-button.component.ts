import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-show-button',
  templateUrl: './show-button.component.html',
  styleUrls: ['./show-button.component.css'],
})
export class ShowButtonComponent {
  @Input() text?: string;
  @Output() isClick = new EventEmitter<boolean>();
  isShow: boolean;

  constructor() {
    this.isShow = false;
    this.isClick.emit(this.isShow);
  }
  showHide() {
    if (this.isShow) {
      this.isShow = false;
      this.isClick.emit(this.isShow);
    } else {
      this.isShow = true;
      this.isClick.emit(this.isShow);
    }
  }
}
