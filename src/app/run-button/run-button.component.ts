import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-run-button',
  templateUrl: './run-button.component.html',
  styleUrls: ['./run-button.component.css'],
})
export class RunButtonComponent {
  @Input() isActive?: boolean;
  @Input() titleButton?: string;
}
