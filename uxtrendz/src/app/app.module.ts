import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MycontainerComponent } from './mycontainer/mycontainer.component';
import { TopNavComponent } from './mycontainer/top-nav/top-nav.component';
import { HeaderComponent } from './mycontainer/header/header.component';
import { Txtsec1Component } from './mycontainer/component/txtsec1/txtsec1.component';
import { Txtsec2Component } from './mycontainer/component/txtsec2/txtsec2.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassBindComponent } from './databind/class-bind/class-bind.component';
import { StyleBindComponent } from './databind/style-bind/style-bind.component';
import { TxtShortPipePipe } from './custompipe/txt-short-pipe.pipe';
import { CarsListComponent } from './mycontainer/component/cars-list/cars-list.component';
import { ProductListComponent } from './mycontainer/component/product-list/product-list.component';
import { FilterPipe } from './custompipe/filter.pipe';
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { SimplegrouptempformComponent } from './form/simplegrouptempform/simplegrouptempform.component';
import { FinalTempFormComponent } from './form/final-temp-form/final-temp-form.component';
import { ProductmanagementComponent } from './product/productmanagement/productmanagement.component';
import { ProductserviceService } from './apiservices/productservice.service';
import { UsermgmtserviceService } from './apiservices/usermgmtservice.service';
import { UsermanagementComponent } from './user/usermanagement/usermanagement.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { UserDashboardService } from './apiservices/user-dashboard.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './apiservices/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MycontainerComponent,
    TopNavComponent,
    HeaderComponent,
    Txtsec1Component,
    Txtsec2Component,
    DatabindComponent,
    ClassBindComponent,
    StyleBindComponent,
    TxtShortPipePipe,
    CarsListComponent,
    ProductListComponent,
    FilterPipe,
    TemplateFormComponent,
    SimplegrouptempformComponent,
    FinalTempFormComponent,
    ProductmanagementComponent,
    UsermanagementComponent,
    UserDashboardComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductserviceService,UsermgmtserviceService,UserDashboardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
