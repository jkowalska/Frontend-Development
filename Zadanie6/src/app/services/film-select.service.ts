import { Film } from '../film/Film';
import { Injectable } from '@angular/core';

@Injectable()
export class Select { 

     constructor(){}

     selectFilm(tytulFilmu) {
        tytulFilmu.showDetails = !tytulFilmu.showDetails; 
     }
}


