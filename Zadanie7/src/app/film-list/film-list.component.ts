import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
import { ReflectiveInjector } from '@angular/core';
import { Film } from '../film/Film';
import { tytuly } from  './../app.component';
import { Delete } from '../services/film-delete.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})

export class FilmListComponent implements OnInit {

  @Input()
  tytulFilmu: Film;

  @Output()
  clickEmitter: EventEmitter<Film> = new EventEmitter();
  
  tytuly: Array<any>;
  usuwanie: Delete;

  constructor(fb: FormBuilder) { 
    this.tytuly = tytuly;
    
    const injector: any = ReflectiveInjector.resolveAndCreate([Delete]);
    this.usuwanie = injector.get(Delete);
  }
  
  ngOnInit() {
  }

  filmDelete(value: any) {
    this.tytuly = this.usuwanie.deleteFilm(value, this.tytuly);
  }
    
  filmClicked(filmName: Film) {
    console.log(`From Parent ${filmName.tytul}`);
  }
}
