import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarVerticalComponent } from './navbar-vertical/navbar-vertical.component';
import { Lab1Component } from './lab1/lab1.component';
import { Lab2Component } from './lab2/lab2.component';
import { Lab3Component } from './lab3/lab3.component';
import { RunButtonComponent } from './run-button/run-button.component';
import { ShowButtonComponent } from './show-button/show-button.component';
import { Lab4Component } from './lab4/lab4.component';
import { ChangeFormComponent } from './change-form/change-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Lab3FormComponent } from './lab3-form/lab3-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarVerticalComponent,
    Lab1Component,
    Lab2Component,
    Lab3Component,
    RunButtonComponent,
    ShowButtonComponent,
    Lab4Component,
    ChangeFormComponent,
    Lab3FormComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
