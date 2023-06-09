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
  logoutUser() {
    localStorage.removeItem('token'); // remove the token from local storage
    this.isAuthenticated = false; // set isAuthenticated to false
  }

  getmatch(){
    return this.http.get("../../assets/data.json")
  }



}