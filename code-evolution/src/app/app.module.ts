import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { ModuleOneComponent } from './module-one/module-one.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleOneModule } from './module-one/module-one.module';
import {FormsModule} from '@angular/forms';   
//Create Book Application
import { AuthModule } from './auth/auth.module';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { HowItWorkComponent } from './howitwork/how-it-work/how-it-work.component';
import { UserModule } from './user/user.module';
import { PublicModule } from './public/public.module';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './include/header/header.component';
import { FooterComponent } from './include/footer/footer.component';
import { HeaderService } from './appservices/header.service';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { SmartComponent } from './smart/smart.component';
import { DumbComponent } from './dumb/dumb.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { Comp1Component } from './home/comp1/comp1.component';
import { Comp2Component } from './home/comp2/comp2.component';
import { Comp3Component } from './home/comp3/comp3.component';
import { Comp4Component } from './home/comp4/comp4.component';
import { DesignutilityService } from './appservices/designutility.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorkComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    SmartComponent,
    DumbComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    
    //ModuleOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleOneModule,
    AuthModule,
    UserModule,
    PublicModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HeaderService,DataService,DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
