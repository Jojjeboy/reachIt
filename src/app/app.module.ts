import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from "@angular/common";
import localeSv from "@angular/common/locales/sv";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "sv-SE" }],
  bootstrap: [AppComponent]
})
export class AppModule { }


registerLocaleData(localeSv, "sv");
