import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutService } from './../aut.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
message : string = 'Vous etes connecté . (pikachu/pikachu';
name: string;
password: string;
aut:AutService;

constructor(
  public autService: AutService,
  private router: Router
  ) { }

  ngOnInit(){

   this.aut = this.autService;
  }


 setMessage(){
 if(this.aut.isLoggedIn){
  this.message = 'Vous etes connecté.';
 } else{
  this.message = 'Identifiant ou mot de passe incorrect.'
 }
 }

 login(){
  this.message = 'Tentative de connexion  en cours'
   this.aut.login(this.name, this.password)
   .subscribe((isLoggedIn:boolean) => {
    this.setMessage();
    if(isLoggedIn){
      this.router.navigate(['/pokemons']);
    }else{
      this.password = '';
      this.router.navigate(['/login']);
    }

   })
}

logout(){
  this.aut.logout();
  this.message = 'Vous etes deconnecté';
}
}
