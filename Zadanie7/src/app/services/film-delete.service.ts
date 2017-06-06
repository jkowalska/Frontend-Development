import { Film } from '../film/Film';
import { Injectable } from '@angular/core';

@Injectable()
export class Delete {    

    constructor(){}

    deleteFilm(value: Film, myFilms: any) {
        let deletedFilm = myFilms.filter(delFilm => delFilm != value);
        return deletedFilm;
    }
}
