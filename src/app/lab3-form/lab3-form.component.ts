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
  VDown: number;
  DDown: number;
  VUp: number;
  DUp: number;
  formName: string[];

  formData: Lab3Form;
  myForm: FormGroup;
  shwitchToogle: boolean;
  shwitchToogleTittle: string;

  constructor(private builder: FormBuilder) {
    this.shwitchToogleTittle = 'Prędkość obrotowa';
    this.formName = ['V', 'rad/s'];
    this.shwitchToogle = true;
    this.VDown = 0;
    this.DDown = 0;
    this.VUp = 0;
    this.DUp = 0;
    this.formData = {
      VDown: 0,
      DDown: 0,
      VUp: 0,
      DUp: 0,
    };
    this.myForm = this.builder.group(this.formData);
  }

  onSubmit(): void {
    this.formData = {
      VDown: this.myForm.value.VDown,
      DDown: this.myForm.value.DDown,
      VUp: this.myForm.value.VUp,
      DUp: this.myForm.value.DUp,
    };
    console.log(this.formData);
  }
  onChange(event: any) {
    if (this.shwitchToogle) {
      this.shwitchToogle = false;
      this.formName[1] = 'mm';
      this.shwitchToogleTittle = 'Przemieszczenie';
    } else {
      this.shwitchToogle = true;
      this.formName[1] = 'rad/s';
      this.shwitchToogleTittle = 'Prędkość obrotowa';
    }
  }
}
