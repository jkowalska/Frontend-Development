import { Component } from '@angular/core';
export var tytuly: Array<any> = [
                    { tytul: "Lot nad kukułczym gniazdem", 
                        rezyser: "Miloš Forman",
                        rok: 1975,
                        gatunek: "dramat psychologiczny",
                        kraj: "USA"                      
                    },
                    { tytul: "Lśnienie", 
                        rezyser: "Stanley Kubrick",
                        rok: 1980,
                        gatunek: "horror",
                        kraj: "USA, Wielka Brytania"                      
                    },
                    { tytul: "Złap mnie, jeśli potrafisz", 
                        rezyser: "Steven Spielberg",
                        rok: 2002,
                        gatunek: "komedia kryminalna",
                        kraj: "Kanada, USA"                      
                    },
                    { tytul: "Captain America: Civil War", 
                        rezyser: "Anthony Russo, Joe Russo",
                        rok: 2016,
                        gatunek: "Akcja, Sci-Fi",
                        kraj: " Niemcy, USA"                      
                    }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    tytuly: Array<any>;
    tytul = 'Moja lista filmów';
    constructor() {
        this.tytuly = tytuly;
    }
}
