import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule,publicRoutingComponent } from './public-routing.module';


@NgModule({
  declarations: [
    publicRoutingComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
