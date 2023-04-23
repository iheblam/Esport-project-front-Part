import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

// Define an interface for the response object
interface LoginResponse {
  token?: string; // Make the token property optional
  // Add other properties if necessary
}

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {

  user = {
    email: '',
    password: ''
  };

 
  constructor(public _auth: AuthService, private router: Router) { }
  formValid() {
    return this.user.email && this.user.password;
  }

  login() {
    this._auth.loginUser(this.user)
      .subscribe(
        (res: LoginResponse) => { // Specify the type of res as LoginResponse
          console.log(res);
          if (res && res.token) { // Check if res and res.token are truthy
            localStorage.setItem('token', res.token);
            this.router.navigate(['/csoon']);
            this._auth.isAuthenticated=true;
            alert("You are successfully logged in!")
          } else {
            console.log('Token not found in response');
          }
        },
        err => {
          console.log(err);
          alert('Email or password invalid');
        }
      )
  }
}