import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  tytuly: string[];

  constructor() {
    this.tytuly = ['Lśnienie', 'Incepcja', 'Labirynt'];
   }

  ngOnInit() {
  }

  filmClicked(tytulName: string) {
    console.log(`From Parent ${tytulName}`);
  }
}
