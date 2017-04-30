import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',    
  styleUrls: ['./film-details.component.css']
})

/*export class Film {
  constructor(
    public tytul: string,
    public rezyser: string,
    public rok: string,
    public gatunek: string,
    public kraj: string,
  ){}
}*/

export class FilmDetailsComponent implements OnInit {

  @Input()
  tytul: string;

  @Output()
  clickEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  filmSelected() {
    console.log(`Film: ${this.tytul} selected`);
    this.clickEmitter.emit(this.tytul);
  }
}
