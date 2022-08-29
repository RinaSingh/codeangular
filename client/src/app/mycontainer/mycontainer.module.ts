import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MycontainerComponent } from './mycontainer.component';
import { MatModule } from '../appModules/mat/mat.module';
import { CoreIceCreamShopComponent } from './coreIceCreamShop/core-ice-cream-shop/core-ice-cream-shop.component';


@NgModule({
  declarations: [
    MycontainerComponent,
    CoreIceCreamShopComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatModule
  ],
  exports:[
    MycontainerComponent,
    
  ]
})
export class MycontainerModule { }
