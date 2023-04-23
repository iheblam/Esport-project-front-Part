import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cloud9',
  templateUrl: './cloud9.component.html',
  styleUrls: ['./cloud9.component.css']
})
export class Cloud9Component {


  constructor(public _auth:AuthService){}
  isloggedin=this._auth.isAuthenticated

}
