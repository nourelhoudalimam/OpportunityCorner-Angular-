import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {Router} from '@angular/router';

import {MatDatepickerModule} from '@angular/material/datepicker';

import{HttpClientModule} from '@angular/common/http';
import SwiperCore from 'swiper';

import { UserServiceService } from './user-service.service';












@NgModule({
  declarations: [
    AppComponent,
   routingComponents,




  ],











  imports: [
    BrowserModule,HttpClientModule,MatDatepickerModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule  {

 }
