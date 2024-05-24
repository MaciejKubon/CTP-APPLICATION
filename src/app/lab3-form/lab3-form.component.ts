import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormLab3, Lab3Form } from '../models/interface';

@Component({
  selector: 'app-lab3-form',
  templateUrl: './lab3-form.component.html',
  styleUrls: ['./lab3-form.component.css'],
})
export class Lab3FormComponent {
  @Output() FormLab3Eiit = new EventEmitter<FormLab3>();
  VDown: number;
  DDown: number;
  VUp: number;
  DUp: number;
  formName: string[];
  formData: Lab3Form;
  myForm: FormGroup;
  shwitchToogle: boolean;
  shwitchToogleTittle: string;
  emitData: FormLab3;

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
      VUp: 10,
      DUp: 800,
    };
    this.myForm = this.builder.group(this.formData);
    this.emitData = {
      form: this.formData,
      switchFrom: this.shwitchToogle,
    };
    console.log(this.emitData);
    this.FormLab3Eiit.emit(this.emitData);
  }

  onSubmit(): void {
    this.formData = {
      VDown: this.myForm.value.VDown,
      DDown: this.myForm.value.DDown,
      VUp: this.myForm.value.VUp,
      DUp: this.myForm.value.DUp,
    };
    this.emitData = {
      form: this.formData,
      switchFrom: this.shwitchToogle,
    };
    this.FormLab3Eiit.emit(this.emitData);
  }
  onChange(event: any): void {
    if (this.shwitchToogle) {
      this.shwitchToogle = false;
      this.formName[1] = 'mm';
      this.shwitchToogleTittle = 'Przemieszczenie';
    } else {
      this.shwitchToogle = true;
      this.formName[1] = 'rad/s';
      this.shwitchToogleTittle = 'Prędkość obrotowa';
    }
    this.onSubmit();
  }
}
