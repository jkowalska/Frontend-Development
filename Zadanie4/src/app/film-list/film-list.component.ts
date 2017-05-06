import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../film/Film';

@Component({
  selector: 'app-film-list',
  //templateUrl: './film-list.component.html',
  template: 
    ` <div>
        <h3><em>Informacje na temat filmów:</em></h3>
        <app-film-details *ngFor="let filmName of tytuly" [tytulFilmu]="filmName" 
        (clickEmitter)="filmClicked($event)"></app-film-details>
     </div> `,
  styleUrls: ['./film-list.component.css']
})

export class FilmListComponent implements OnInit {

  film: Film;
  tytuly: Array<any>;

  constructor() { 
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
  }

  ngOnInit() {
  }
  
  filmClicked(filmName: Film) {
    console.log(`From Parent ${filmName.tytul}`);
  }
}