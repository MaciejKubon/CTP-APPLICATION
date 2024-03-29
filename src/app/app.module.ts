import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarVerticalComponent } from './navbar-vertical/navbar-vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarVerticalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
