import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navb',
  templateUrl: './navb.component.html',
  styleUrls: ['./navb.component.css']
})
export class NavbComponent {
  constructor(public _auth: AuthService, private router: Router) { }
 
  isloggedin=this._auth.isAuthenticated
  logout() {
      this._auth.logoutUser(); // call the logoutUser() method from AuthService
      this.router.navigate(['/home']); // navigate to the login page
   
 
    
  }


}

