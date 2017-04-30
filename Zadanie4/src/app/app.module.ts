import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailsComponent } from './film-details/film-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
