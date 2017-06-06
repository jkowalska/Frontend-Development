import { Film } from '../film/Film';
import { Injectable } from '@angular/core';

@Injectable()
export class Edit {

    constructor() { }

    editFilm(oldtytul: any, newtytul: any, newrezyser: any, newrok: any, newgatunek: any, newkraj: any, myFilms: any) {         
        for(let i = 0; i < myFilms.length; i++){
           if (oldtytul === myFilms[i].tytul){
               myFilms[i].tytul = newtytul;
               myFilms[i].rezyser = newrezyser;
               myFilms[i].rok = newrok;
               myFilms[i].gatunek = newgatunek;
               myFilms[i].kraj = newkraj;
           }
       }
       return myFilms;        
    }
}