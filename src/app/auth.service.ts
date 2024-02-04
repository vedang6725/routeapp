import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isAuthenticated = false

  login(username:any, password:any) {
    if(username=='admin' && password=='admin') {
      this.isAuthenticated = true;
      return true;
    }else{
      return false;
    }
  }

  isLoggedIn() {
    return this.isAuthenticated
  }
}
