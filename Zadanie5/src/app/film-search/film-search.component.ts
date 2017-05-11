import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-film-search',
  //templateUrl: './film-details.component.html', 
  template: 
    ` <div>
    <input type="search" [formControl]="searchField">
<ul>
  <li *ngFor="let searchFilm of searches"> {{ searchFilm }} </li>
</ul>
     </div> `,
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {

  searchField: FormControl;

  searches: string[] = [];

  constructor() { 
    this.searchField = new FormControl();
    this.searchField.valueChanges.subscribe(
      searchFilm => this.searches.push(searchFilm)
    );
   }

  ngOnInit() {
  }

}
