import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../film/Film';

@Component({
  selector: 'app-film-details',
  //templateUrl: './film-details.component.html', 
  template: 
    ` <div (click)="filmSelected(tytulFilmu)">
      <a><font size="5"><label><strong>tytuł: </strong></label>{{tytulFilmu.tytul}}</font></a>
      <div  *ngIf="tytulFilmu.showDetails">
         <hr>
         <div><label><strong>reżyser: </strong></label>{{tytulFilmu.rezyser}}</div>
         <div><label><strong>rok: </strong></label>{{tytulFilmu.rok}}</div>
         <div><label><strong>gatunek: </strong></label>{{tytulFilmu.gatunek}}</div>
         <div><label><strong>kraj: </strong></label>{{tytulFilmu.kraj}}</div>
         <hr>
       </div>
     </div> `,
  styleUrls: ['./film-details.component.css']
})

export class FilmDetailsComponent implements OnInit {

  @Input()
  tytulFilmu: FilmDetails;

  @Output()
  clickEmitter: EventEmitter<Film> = new EventEmitter<Film>();

  constructor() { }

  ngOnInit() {
  }

  filmSelected(tytulFilmu) {
    if (tytulFilmu.showDetails) { 
      tytulFilmu.showDetails = false;
    } else {
      tytulFilmu.showDetails = true;
    }
    console.log(`Film: ${this.tytulFilmu.tytul} selected`);
    this.clickEmitter.emit(this.tytulFilmu);
  }
}

export class FilmDetails extends Film {
  showDetails = !this.showDetails;  
}
