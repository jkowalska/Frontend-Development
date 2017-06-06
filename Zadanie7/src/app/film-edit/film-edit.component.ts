import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
import { ReflectiveInjector } from '@angular/core';
import { Film } from '../film/Film';
import { tytuly } from  './../app.component';
import { Edit } from '../services/film-edit.service';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.css']
})

export class FilmEditComponent implements OnInit {

  @Input()
  tytulFilmu: Film;

  tytuly: Array<any>;
  edytowanie: Edit;

  myForm3: FormGroup;
  tytul: AbstractControl;
  ntytul: AbstractControl;
  nrezyser: AbstractControl; 
  nrok: AbstractControl;
  ngatunek: AbstractControl;
  nkraj: AbstractControl;
  
  constructor(fb: FormBuilder) {
    this.tytuly = tytuly;
    const injector: any = ReflectiveInjector.resolveAndCreate([Edit]);
    this.edytowanie = injector.get(Edit);

      this.myForm3 = fb.group( { 
      'tytul': ['', Validators.compose(
        [Validators.required, Validators.minLength(1), Validators.maxLength(50)]
        )],
      'ntytul': ['', Validators.compose(
        [Validators.required, Validators.minLength(1), Validators.maxLength(50)]
        )],
      'nrezyser': ['', Validators.compose(
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
        )],
      'nrok': ['', Validators.compose(
        [Validators.required, Validators.minLength(4), Validators.maxLength(4),this.myYearValidator]
        )],
      'ngatunek': ['', Validators.compose(
        [Validators.required, Validators.minLength(3), Validators.maxLength(30)]
        )],
      'nkraj': ['', Validators.compose(
        [Validators.required, Validators.minLength(2), Validators.maxLength(30)]
        )]      
    } );
    this.tytul = this.myForm3.controls['tytul'];
    this.ntytul = this.myForm3.controls['ntytul'];
    this.nrezyser = this.myForm3.controls['nrezyser'];
    this.nrok = this.myForm3.controls['nrok'];
    this.ngatunek = this.myForm3.controls['ngatunek'];
    this.nkraj = this.myForm3.controls['nkraj'];    
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

  filmEdit(value: any) {
    this.tytuly = this.edytowanie.editFilm(value.tytul,value.ntytul,value.nrezyser,value.nrok,value.ngatunek,value.nkraj,this.tytuly);
  }
}
