import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private url = 'http://127.0.0.1:3000/';


  public isAuthenticated= false; // added property to track authentication status

  createNewUser(user: any) {
    return this.http.post(this.url + 'user/register', user);
  }

  loginUser(user: any) {
    return this.http.post(this.url + 'user/login', user);
  }

}