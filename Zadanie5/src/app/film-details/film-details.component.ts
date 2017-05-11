import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../film/Film';

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

  constructor() { }

  ngOnInit() {
  }

  filmSelected(tytulFilmu) {
    tytulFilmu.showDetails = !tytulFilmu.showDetails; 
    console.log(`Film: ${this.tytulFilmu.tytul} selected`);
    this.clickEmitter.emit(this.tytulFilmu);
  }
}
