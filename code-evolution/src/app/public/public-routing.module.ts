import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { AllBooksComponent } from './component/all-books/all-books.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { HomeComponent } from './component/home/home.component';
const routes: Routes = [
  {
    path:'public',
    component: PublicComponent,
    children:[
      {path:'home', component:HomeComponent},
      {path:'all-book', component:AllBooksComponent},
      {path:'book-details/:id', component:BookDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
export const publicRoutingComponent = [PublicComponent,AllBooksComponent,BookDetailsComponent]
