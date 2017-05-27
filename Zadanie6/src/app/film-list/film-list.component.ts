import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
import { ReflectiveInjector } from '@angular/core';
import { Film } from '../film/Film';
import { Add } from '../services/film-add.service';
import { Delete } from '../services/film-delete.service';
import { Search } from '../services/film-search.service';

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
  
  film: Film;
  tytuly: Array<any>;

  myForm: FormGroup;
  tytul: AbstractControl;
  rezyser: AbstractControl; 
  rok: AbstractControl;
  gatunek: AbstractControl;
  kraj: AbstractControl;

  searchField: FormControl;
  searches: Film[] = [];

  dodawanie: Add;
  usuwanie: Delete;
  wyszukiwanie: Search;

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
        [Validators.required, Validators.minLength(4), Validators.maxLength(4), this.myYearValidator]
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
    this.searchField = new FormControl();

    const injector: any = ReflectiveInjector.resolveAndCreate([Search,Add,Delete]);
    this.wyszukiwanie = injector.get(Search);
    this.dodawanie = injector.get(Add);
    this.usuwanie = injector.get(Delete);
  }
  
  ngOnInit() {
  }

  filmSubmit(value: any) {
    this.tytuly = this.dodawanie.addFilm(value, this.tytuly);
  }

  filmDelete(value: any) {
    this.tytuly = this.usuwanie.deleteFilm(value, this.tytuly);
  }

  filmSearch(value: any) {
      this.searches = this.wyszukiwanie.searchFilm(
        this.searchField, this.tytuly
      );
  }   
  
  myYearValidator(control: FormControl) {
    if (!control.value.match(/^[0-9]/)) {
      return {
        'rokValue': true
      };
    }
  }
  
  filmClicked(filmName: Film) {
    console.log(`From Parent ${filmName.tytul}`);
  }
}
