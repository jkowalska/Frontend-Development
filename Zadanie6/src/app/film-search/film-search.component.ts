import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
import { ReflectiveInjector } from '@angular/core';
import { Film } from '../film/Film';
import { Search } from '../services/film-search.service';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html', 
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {

  @Input()
  tytulFilmu: Film;

  @Output()
  clickEmitter: EventEmitter<Film> = new EventEmitter();

  myForm: FormGroup;
  tytuly: Array<any>;

  searchField: FormControl;
  searches: Film[] = [];

  wyszukiwanie: Search;

  constructor(fb: FormBuilder) { 
    this.searchField = new FormControl(); 

    const injector: any = ReflectiveInjector.resolveAndCreate([Search]);
    this.wyszukiwanie = injector.get(Search);
   }

  filmSearch(value: any) {
      this.searches = this.wyszukiwanie.searchFilm(
        this.searchField, this.tytuly
      );
  } 

  ngOnInit() {
  }
}
