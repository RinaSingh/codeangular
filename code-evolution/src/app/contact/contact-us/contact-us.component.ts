import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/appservices/header.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit,OnDestroy {

  constructor(private _header:HeaderService) { }
  ngOnDestroy(): void {
    this._header.addressNav.next(false);
    this._header.mainNav.next(true);
    this._header.creadNav.next(true);
  }

  ngOnInit(): void {
    this._header.addressNav.next(true);
    this._header.mainNav.next(true);
    this._header.creadNav.next(false);
  }

}
