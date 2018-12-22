import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> for ibmcloud

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    MDBBootstrapModule.forRoot(),
    HttpClientModule
=======
    MDBBootstrapModule.forRoot()
>>>>>>> for ibmcloud
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
