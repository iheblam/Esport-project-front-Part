import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-fnatic',
  templateUrl: './fnatic.component.html',
  styleUrls: ['./fnatic.component.css']
})
export class FnaticComponent {

  constructor(public _auth:AuthService){}
  isloggedin=this._auth.isAuthenticated

}
