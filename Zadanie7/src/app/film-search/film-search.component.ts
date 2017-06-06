import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
import { ReflectiveInjector } from '@angular/core';
import { Film } from '../film/Film';
import { tytuly } from  './../app.component';
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

  tytuly: Array<any>;
  wyszukiwanie: Search;

  myForm2: FormGroup;
  searchField: FormControl;
  searches: Film[] = [];  
  tytul: AbstractControl;

  constructor(fb: FormBuilder) { 
      this.searchField = new FormControl(); 
      this.tytuly = tytuly;
      const injector: any = ReflectiveInjector.resolveAndCreate([Search]);
      this.wyszukiwanie = injector.get(Search);

      this.myForm2 = fb.group({
        "tytul": ['', Validators.required]
    });
        this.tytul = this.myForm2.controls['tytul'];
   
   }

  filmSearch(value: any) {
      this.searches = this.wyszukiwanie.searchFilm(
        this.searchField, this.tytuly
      );
  } 

  ngOnInit() {
  }
}
