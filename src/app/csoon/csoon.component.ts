import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-csoon',
  templateUrl: './csoon.component.html',
  styleUrls: ['./csoon.component.css']
})
export class CsoonComponent {
  constructor(public _auth:AuthService){}
  dataa:any

  ngOnInit(): void {
    this._auth.getmatch().subscribe((data:any) => {
      console.log(data)
      this.dataa=data.matches;

      
    },
    (err)=>console.log(err)
    
    );
  }


}
