import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-vertical',
  templateUrl: './navbar-vertical.component.html',
  styleUrls: ['./navbar-vertical.component.css'],
})
export class NavbarVerticalComponent {
  NumberLab: number;
  constructor() {
    this.ClickLabButton;
    this.NumberLab = 1;
  }
  @Output() NewActiveLab = new EventEmitter<number>();

  ClickLabButton(value: number) {
    this.NumberLab = value;
    this.NewActiveLab.emit(this.NumberLab);
  }
}
