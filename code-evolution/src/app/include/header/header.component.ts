import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/appservices/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  goBackNav !:boolean;
  mainNav!:boolean;
  creadNav !:boolean;
  addressNav !:boolean;
  internalPgNav:boolean =false;
  isLoggedUser:boolean = false;

  constructor(private _header:HeaderService) { 
     this._header.addressNav.subscribe(res => {
      console.log(res);
      this.addressNav = res;
    });
    this._header.mainNav.subscribe(res => {
      console.log(res);
      this.mainNav = res;
    });
    this._header.goBackNav.subscribe(res => {
      console.log(res);
      this.goBackNav = res;
    });
    this._header.creadNav.subscribe(res => {
      console.log(res);
      this.creadNav = res;
    });
  }

  ngOnInit(): void {
  }

}
