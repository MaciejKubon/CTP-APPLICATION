import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Lab3Form } from '../models/interface';

@Component({
  selector: 'app-lab3-form',
  templateUrl: './lab3-form.component.html',
  styleUrls: ['./lab3-form.component.css'],
})
export class Lab3FormComponent {
  Q: number;
  RV: number;
  C: number;
  D: number;
  FV: number;

  formData: Lab3Form;
  myForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.Q = 0;
    this.RV = 0;
    this.C = 0;
    this.D = 0;
    this.FV = 0;
    this.formData = {
      Q: 0,
      RV: 0,
      C: 0,
      D: 0,
      FV: 0,
    };
    this.myForm = this.builder.group(this.formData);
  }

  onSubmit(): void {
    this.formData = {
      Q: this.myForm.value.Q,
      RV: this.myForm.value.RV,
      C: this.myForm.value.C,
      D: this.myForm.value.D,
      FV: this.myForm.value.FV,
    };
  }
}
