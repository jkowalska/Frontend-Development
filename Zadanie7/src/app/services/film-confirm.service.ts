import { FilmSearchComponent } from '../film-search/film-search.component';
import { Router, CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfirmContactGuard implements CanDeactivate<FilmSearchComponent> {

  constructor(private router: Router) { }

  canDeactivate(target: FilmSearchComponent) {
    return window.confirm('Czy chcesz wyjść z wyszukiwarki?');
  }
}