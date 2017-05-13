import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
import { Film } from '../film/Film';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent implements OnInit {

  myForm: FormGroup;
  film: Film;
  tytuly: Array<any>;

  tytul: AbstractControl;
  rezyser: AbstractControl; 
  rok: AbstractControl;
  gatunek: AbstractControl;
  kraj: AbstractControl;

  constructor(fb: FormBuilder) { 
    let film = new Film();
    this.tytuly = [];
    this.tytuly.push({ tytul: "Lot nad kukułczym gniazdem", 
                        rezyser: "Miloš Forman",
                        rok: 1975,
                        gatunek: "dramat psychologiczny",
                        kraj: "USA"                      
                    });
    this.tytuly.push({ tytul: "Złap mnie, jeśli potrafisz", 
                        rezyser: "Steven Spielberg",
                        rok: 2002,
                        gatunek: "komedia kryminalna",
                        kraj: "Kanada, USA"                      
                    });
    this.tytuly.push({ tytul: "Lśnienie", 
                        rezyser: "Stanley Kubrick",
                        rok: 1980,
                        gatunek: "horror",
                        kraj: "USA, Wielka Brytania"                      
                    });

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
        /*[Validators.required, Validators.minLength(4), Validators.maxLength(4)]
        )],*/
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

    this.tytul.valueChanges.subscribe(); 
  }

  mySubmit(value: any) {
    //console.log(value.tytul);
    this.tytuly.push({tytul : value.tytul, 
                      rezyser : value.rezyser,
                      rok : value.rok, 
                      gatunek : value.gatunek, 
                      kraj : value.kraj })
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
