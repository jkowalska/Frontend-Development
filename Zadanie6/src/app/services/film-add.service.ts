import { Film } from '../film/Film';
import { Injectable } from '@angular/core';

@Injectable()
export class Add {    

    constructor(){}

    addFilm(value: any, myFilms: any) {
        myFilms.push({tytul : value.tytul, 
                      rezyser : value.rezyser,
                      rok : value.rok, 
                      gatunek : value.gatunek, 
                      kraj : value.kraj })
        return myFilms;
    }
}
