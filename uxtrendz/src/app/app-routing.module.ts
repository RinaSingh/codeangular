import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'', component:AuthComponent},
  {path:'dashboard', component:UserDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
