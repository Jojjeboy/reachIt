import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from "@angular/common";
import localeSv from "@angular/common/locales/sv";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "sv-SE" }],
  bootstrap: [AppComponent]
})
export class AppModule { }


registerLocaleData(localeSv, "sv");
