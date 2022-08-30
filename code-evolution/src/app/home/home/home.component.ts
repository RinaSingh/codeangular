import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/appservices/header.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor(private _header:HeaderService) { }

  ngOnInit(): void {
    this._header.addressNav.next(false);
  }
  ngOnDestroy(): void {
    this._header.addressNav.next(true);
  }

}
