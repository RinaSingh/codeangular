import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path : 'auth',
    component : AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  },
  
];

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
export const authRouteComponent = [
  LoginComponent,
  SignupComponent
]
