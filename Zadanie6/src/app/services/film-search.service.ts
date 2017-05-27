import { Film } from '../film/Film';
import { Injectable } from '@angular/core';

@Injectable()
export class Search {    

    constructor(){}

    searchFilm(value: any, myFilms: any) {    
      let searches: Film[] = [];
      let foundFilm = myFilms
        .filter(film => film.tytul
        .match(value.value))
        .forEach(film => { searches.push(film); });
      return searches;
    }
}
