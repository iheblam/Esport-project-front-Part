import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user={
    firstname:'',
    lastname:'',
    email:'',
    password:''
  }

  constructor(private _auth:AuthService, private router: Router) {}
  formValid() {
    return this.user.email && this.user.password && this.user.firstname && this.user.lastname ;
  }

  ajout(){
    this._auth.createNewUser(this.user)
    .subscribe(
      res => {
        console.log(res);
        alert('Register success!');
        this.router.navigate(['/login-signup']); // navigate to login component
      },
      err => {
        console.log(err)
      }
    )
  }
}