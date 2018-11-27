import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TalliesComponent } from './tallies/tallies.component';
import { AddTallyComponent } from './add-tally/add-tally.component';
import { EditTallyComponent } from './edit-tally/edit-tally.component';
import { TallyComponent } from './tally/tally.component';
import { FormsModule } from '@angular/forms';
import { TimeAgoPipe } from 'time-ago-pipe';


const appRoutes: Routes = [
  {
      path: '',
      component: TalliesComponent,
      data: { title: 'Start Page' }
    },
    {
      path: 'add',
      component: AddTallyComponent,
      data: { title: 'Add Tally' }
    },
    {
      path: 'edit/:id',
      component: EditTallyComponent,
      data: { title: 'Edit Tally' }
    },
  ];

@NgModule({
  declarations: [
    AppComponent,
    TalliesComponent,
    TallyComponent,
    AddTallyComponent,
    EditTallyComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: false}
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }