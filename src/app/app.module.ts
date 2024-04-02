import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarVerticalComponent } from './navbar-vertical/navbar-vertical.component';
import { Lab1Component } from './lab1/lab1.component';
import { Lab2Component } from './lab2/lab2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarVerticalComponent,
    Lab1Component,
    Lab2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }