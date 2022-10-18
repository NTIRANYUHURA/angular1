import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { AutService } from './aut.service';

@Injectable({
  providedIn: 'root'
})
export class AutGuard implements CanActivate {

  constructor(
    private AutService: AutService,
    private router: Router
    ){}

  canActivate(): boolean {
    if(this.AutService.isLoggedIn){
      return true;
    }
    this.router.navigate((['/login']))
    return false;
  }


}
