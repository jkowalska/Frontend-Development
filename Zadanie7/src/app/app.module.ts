import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmSearchComponent } from './film-search/film-search.component';
import { FilmFormComponent } from './film-form/film-form.component';
import { RouterModule, Routes} from '@angular/router';
import { ConfirmContactGuard} from './services/film-confirm.service';
import { FilmEditComponent } from './film-edit/film-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'lista', component: FilmListComponent },
  { path: 'dodaj', component: FilmFormComponent },
  { path: 'edytuj', component: FilmEditComponent },
  { path: 'szukaj', component: FilmSearchComponent,  canDeactivate: [ConfirmContactGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmDetailsComponent,
    FilmSearchComponent,
    FilmFormComponent,
    FilmEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ConfirmContactGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
