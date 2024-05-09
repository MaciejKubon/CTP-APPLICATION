import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import formData from '../models/interface';

@Component({
  selector: 'app-change-form',
  templateUrl: './change-form.component.html',
  styleUrls: ['./change-form.component.css'],
})
export class ChangeFormComponent {
  @Output() FormEiit = new EventEmitter<formData>();
  formData: formData;
  yStart = new FormControl('');
  yStop = new FormControl('');
  xLength = new FormControl('');
  myForm: FormGroup = this.builder.group({
    yStart: this.yStart,
    yStop: this.yStop,
    xLength: this.xLength,
  });

  constructor(private builder: FormBuilder) {
    this.formData = {
      yStart: 0,
      yStop: 0,
      xLength: 0,
    };
  }

  ngOnInit() {
    this.myForm = this.builder.group({
      yStart: ['', Validators.required],
      yStop: ['', Validators.required],
      xLength: ['', Validators.required],
    });
  }

  onSubmit() {
    this.formData = {
      yStart: this.myForm.value.yStart,
      yStop: this.myForm.value.yStop,
      xLength: this.myForm.value.xLength,
    };
    this.FormEiit.emit(this.formData);
  }
}
