import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ClearCacheComponent } from './clear/clear-cache.component';
import { AddExampleComponent } from './add-example/add-example.component';
import { TalliesComponent } from './tallies/tallies.component';
import { AddTallyComponent } from './add-tally/add-tally.component';
import { EditTallyComponent } from './edit-tally/edit-tally.component';
import { TallyComponent } from './tally/tally.component';
import { FormComponent } from './form/form.component';
import { TallyHistoryComponent } from './tally-history/tally-history.component';
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
      {
        path: 'clear',
        component: ClearCacheComponent,
        data: { title: 'Clear Cache' }
      },
      {
        path: 'example',
        component: AddExampleComponent,
        data: { title: 'Add example' }
      },
      { path: '**', component: TalliesComponent }
    ];


    @NgModule({
        imports: [
            BrowserModule,
            RouterModule.forRoot(
                appRoutes, {
                    enableTracing: false
                }
            ),
            FormsModule,
            CommonModule
        ],
        exports: [RouterModule],
        declarations: [
            TalliesComponent,
            AddTallyComponent,
            EditTallyComponent,
            ClearCacheComponent,
            AddExampleComponent,
            TallyComponent,
            FormComponent,
            TallyHistoryComponent,
            TimeAgoPipe
        ]

    })

    export class AppRoutingModule {}