import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cloud9Component } from './cloud9/cloud9.component';
import { FazeComponent } from './faze/faze.component';
import { HomeComponent } from './home/home.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ValoComponent } from './valo/valo.component';
import { FnaticComponent } from './fnatic/fnatic.component';
import { CsoonComponent } from './csoon/csoon.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login-signup',component:LoginSignupComponent},
  {path:'register',component:RegisterComponent},
  {path:'valo',component:ValoComponent},
  {path:'faze',component:FazeComponent},
  {path:'cloud9',component:Cloud9Component},
  {path:'fnatic',component:FnaticComponent},
  {path:'csoon',component:CsoonComponent,canActivate:[AuthGuard]},
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
