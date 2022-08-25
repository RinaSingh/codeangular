import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MycontainerModule} from './mycontainer/mycontainer.module';
import { CoreIceCreamShopService } from './appServices/core-ice-cream-shop.service';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MycontainerModule,
    
  ],
  
  providers: [CoreIceCreamShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
