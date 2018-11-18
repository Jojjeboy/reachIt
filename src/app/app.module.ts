import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReachItContainerComponent } from './reach-it-container/reach-it-container.component';
import { ReachItItemComponent } from './reach-it-item/reach-it-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ReachItContainerComponent,
    ReachItItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
