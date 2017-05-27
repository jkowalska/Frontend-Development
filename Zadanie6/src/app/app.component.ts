import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: 
    ` <div> 
       <h1> {{tytul}} </h1>
       <app-film-list></app-film-list>
     </div> `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tytul = 'Moja lista filmów';
}
