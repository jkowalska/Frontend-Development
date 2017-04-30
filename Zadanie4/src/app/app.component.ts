import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: 
    ` <div> 
       <p> {{tytul}} </p>
       <app-film-list></app-film-list>
     </div> `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //tytul = 'Lśnienie';
}
