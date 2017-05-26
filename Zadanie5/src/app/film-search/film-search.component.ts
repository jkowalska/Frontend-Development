import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
import { Film } from '../film/Film';

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
  film: Film;
  tytuly: Array<any>;

  tytul: AbstractControl;
  rezyser: AbstractControl; 
  rok: AbstractControl;
  gatunek: AbstractControl;
  kraj: AbstractControl;

  searchField: FormControl;
  searches: Film[] = [];

  constructor(fb: FormBuilder) { 
    this.searchField = new FormControl(); 
   }

  search(value: any){
      let searchedFilm = this.tytuly.filter(film => film.tytul.match(this.searchField.value));
      searchedFilm.forEach(film => { this.searches.push(film); });
  }  

  ngOnInit() {
  }

  mySubmit(value: any) {
    this.tytuly.push({tytul : value.tytul, 
                      rezyser : value.rezyser,
                      rok : value.rok, 
                      gatunek : value.gatunek, 
                      kraj : value.kraj })
  }
}
