import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;
  constructor() { }

  login (){
    this.loggedIn = true;
  }

  logOut (){
    this.loggedIn = false;
  }

  isAuthenticated (){
    return this.loggedIn;
  }

}
