import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
import { ReflectiveInjector } from '@angular/core';
import { Film } from '../film/Film';
import { tytuly } from  './../app.component';
import { Add } from '../services/film-add.service';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})

export class FilmFormComponent implements OnInit {

  @Input()
  tytulFilmu: Film;

  @Output()
  clickEmitter: EventEmitter<Film> = new EventEmitter();

  tytuly: Array<any>;
  dodawanie: Add;

  myForm: FormGroup;
  tytul: AbstractControl;
  rezyser: AbstractControl; 
  rok: AbstractControl;
  gatunek: AbstractControl;
  kraj: AbstractControl;
  
  constructor(fb: FormBuilder) { 
    this.tytuly = tytuly;    

    this.myForm = fb.group( { 
      'tytul': ['', Validators.compose(
        [Validators.required, Validators.minLength(1), Validators.maxLength(50)]
        )],
      'rezyser': ['', Validators.compose(
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
        )],
      'rok': ['', Validators.compose(
        [Validators.required, Validators.minLength(4), Validators.maxLength(4),this.myYearValidator]
        )],
      'gatunek': ['', Validators.compose(
        [Validators.required, Validators.minLength(3), Validators.maxLength(30)]
        )],
      'kraj': ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(30)]
        )]      
    } );
    this.tytul = this.myForm.controls['tytul'];
    this.rezyser = this.myForm.controls['rezyser'];
    this.rok = this.myForm.controls['rok'];
    this.gatunek = this.myForm.controls['gatunek'];
    this.kraj = this.myForm.controls['kraj'];    

    const injector: any = ReflectiveInjector.resolveAndCreate([Add]);
    this.dodawanie = injector.get(Add);
  }

  filmClicked(filmName: Film) {
    console.log(`From Parent ${filmName.tytul}`);
  }

  filmSubmit(value: any) {
    this.tytuly = this.dodawanie.addFilm(value, this.tytuly);
  }
  
  myYearValidator(control: FormControl) {
    if (!control.value.match(/^[0-9]/)) {
      return {
        'rokValue': true
      };
    }
  }

  ngOnInit() {
  }
}
