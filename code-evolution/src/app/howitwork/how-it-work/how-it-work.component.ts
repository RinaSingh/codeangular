import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/appservices/header.service';
@Component({
  selector: 'app-how-it-work',
  templateUrl: './how-it-work.component.html',
  styleUrls: ['./how-it-work.component.css']
})
export class HowItWorkComponent implements OnInit, OnDestroy {

  constructor(private _header:HeaderService) { }

  ngOnDestroy(): void {
    this._header.mainNav.next(true);
    this._header.addressNav.next(true);
    this._header.creadNav.next(true);
  }

  ngOnInit(): void {
    this._header.mainNav.next(true);
    this._header.addressNav.next(false);
    this._header.creadNav.next(false);
    
  }

}
