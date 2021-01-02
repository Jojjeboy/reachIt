import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared.module';
import { registerLocaleData } from "@angular/common";
import { AppComponent } from './app.component';
import localeSv from "@angular/common/locales/sv";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "sv-SE" }],
  bootstrap: [AppComponent]
})
export class AppModule { }


registerLocaleData(localeSv, "sv");
 