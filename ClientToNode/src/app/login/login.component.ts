import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message;
  constructor(private service: AuthService, private router: Router) 
  {

  }

  ngOnInit() 
  {
  }

  SignIn(loginForm)
  {
    let loginCredentials = loginForm.form.value;
    console.log(loginCredentials);

    let isUserValid= this.service.CheckCredentialsWithDB(loginCredentials);
    if(isUserValid)
    {
      console.log("User Is Valid");
      
      this.router.navigate(['/home']); 
    }
    else{
      this.message = "User Name / Password is Invalid!";
    }
  }
}





