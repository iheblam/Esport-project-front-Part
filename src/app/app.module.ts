import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ValoComponent } from './valo/valo.component';
import { FazeComponent } from './faze/faze.component';
import { Cloud9Component } from './cloud9/cloud9.component';
import { FnaticComponent } from './fnatic/fnatic.component';
import { NavbComponent } from './navb/navb.component';
import { HttpClientModule } from '@angular/common/http';
import { CsoonComponent } from './csoon/csoon.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginSignupComponent,
    ValoComponent,
    FazeComponent,
    Cloud9Component,
    FnaticComponent,
    NavbComponent,
    CsoonComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
