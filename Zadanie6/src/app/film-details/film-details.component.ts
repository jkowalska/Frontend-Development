import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReflectiveInjector } from '@angular/core';
import { Film } from '../film/Film';
import { Select } from '../services/film-select.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html', 
  styleUrls: ['./film-details.component.css']
})

export class FilmDetailsComponent implements OnInit {

  @Input()
  tytulFilmu: Film;

  @Output()
  clickEmitter: EventEmitter<Film> = new EventEmitter();

  wybranie: Select;

  constructor() {
    const injector: any = ReflectiveInjector.resolveAndCreate([Select]);
    this.wybranie = injector.get(Select);
  }

  ngOnInit() {
  }

  filmSelected(tytulFilmu) {   
    this.wybranie.selectFilm(tytulFilmu);
    this.clickEmitter.emit(this.tytulFilmu);
  }  
}
