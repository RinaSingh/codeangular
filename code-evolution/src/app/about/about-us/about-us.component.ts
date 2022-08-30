import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/appservices/header.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit,OnDestroy {
  
  constructor(private _header:HeaderService) { 
   
  }
  ngOnInit(): void {
    //this._header.addressNav.next(true);
    this._header.creadNav.next(false);
    this._header.addressNav.next(false);
  }
  ngOnDestroy(): void {
    this._header.addressNav.next(false);
    this._header.creadNav.next(true);
    this._header.addressNav.next(true);
  }
}

  


