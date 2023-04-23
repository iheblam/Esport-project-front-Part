import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-faze',
  templateUrl: './faze.component.html',
  styleUrls: ['./faze.component.css']
})
export class FazeComponent {
  

  constructor(public _auth:AuthService){}
  isloggedin=this._auth.isAuthenticated



}
