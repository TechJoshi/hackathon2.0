import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  credentials = { "email": "", "password": "" };
  user : any;

  constructor(private router: Router, private service: DataService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.IsLoggedIn()) {
      console.log("User Has Logged in");
      return true;
    }
    else {
      console.log("User Has not Logged in");
      this.router.navigate(['/login']);
      return false;
    }
  }

  IsLoggedIn() {

    if (window.sessionStorage.getItem("isActive") != null
      &&
      window.sessionStorage.getItem("isActive") == "1") {
      // some logic to check if person has logged in
      return true;
    }
    else {
      return false;
    }
  }

  CheckCredentialsWithDB(pcredentials) {
    this.credentials.email = pcredentials.UserName;
    this.credentials.password = pcredentials.Password
    console.log( this.credentials)
    let observableResult = this.service.LoginFromBackend(this.credentials);
    observableResult.subscribe((result) => {
      console.log(result);
      this.user = result;
      
    });
    console.log(this.user)
    //Call Some  Service using Post Method


    //to check credentials with DB 
    if (this.user.email==this.credentials.email && this.user.password==this.credentials.password) {
      window.sessionStorage.setItem("isActive", "1");
      return true;
    }
    else {
      return false;
    }
  }


  Logout()
  {
    window.sessionStorage.setItem("isActive", "0");
    this.router.navigate(['/login']);
  }

}



