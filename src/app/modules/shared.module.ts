import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { TimeAgoPipe } from 'time-ago-pipe';



@NgModule({
  declarations: [
    TimeAgoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeAgoPipe,
    CommonModule,
    BrowserModule
  ]
})
export class SharedModule { }
